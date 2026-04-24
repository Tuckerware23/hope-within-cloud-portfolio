# DNS Lab

This directory contains a complete walkthrough for setting up a local DNS server using BIND9 on Ubuntu. It includes instructions for creating forward and reverse zone files, registering them with BIND, verifying the configuration, and testing DNS resolution.

## Prerequisites

- Ubuntu or another Linux distribution with administrative privileges.
- BIND9 installed (`sudo apt update && sudo apt install bind9 bind9utils`).

## 1. Create zone directory

BIND stores zone files in `/etc/bind/zones` by convention. Create it if it doesn’t exist:

```bash
sudo mkdir -p /etc/bind/zones
```

## 2. Forward zone file

The forward zone file maps hostnames to IP addresses. Below is an example for `example.com` (replace names and addresses with your domain). Note the TTL (`86400` seconds), SOA record specifying the primary name server and contact, NS record pointing at your name server, and A/MX/CNAME records【576889100224869†L159-L195】.

```
$TTL    86400
@       IN      SOA     ns1.example.com. admin.example.com. (
                        2026042401 ; serial
                        3600       ; refresh
                        1800       ; retry
                        604800     ; expire
                        86400      ; minimum
                        )
        IN      NS      ns1.example.com.
ns1     IN      A       10.20.0.10
www     IN      A       10.20.0.20
mail    IN      A       10.20.0.30
        IN      MX 10   mail.example.com.
ftp     IN      CNAME   www
```

Save this as `/etc/bind/zones/db.example.com` and adjust the serial number when you make changes.

## 3. Reverse zone file

The reverse zone file maps IP addresses back to hostnames using PTR records. For the `10.20.0.0/24` network the zone is named `0.20.10.in-addr.arpa`【576889100224869†L198-L227】. A sample file:

```
$TTL    86400
@       IN      SOA     ns1.example.com. admin.example.com. (
                        2026042401 ; serial
                        3600       ; refresh
                        1800       ; retry
                        604800     ; expire
                        86400      ; minimum
                        )
        IN      NS      ns1.example.com.
10      IN      PTR     ns1.example.com.
20      IN      PTR     www.example.com.
30      IN      PTR     mail.example.com.
```

Save this as `/etc/bind/zones/db.10.20.0`.

## 4. Register zones in named.conf.local

Tell BIND about your zones by adding zone declarations in `/etc/bind/named.conf.local`. Each entry specifies the zone name, type (`master`), and the file path【576889100224869†L254-L270】:

```
zone "example.com" {
    type master;
    file "/etc/bind/zones/db.example.com";
};

zone "0.20.10.in-addr.arpa" {
    type master;
    file "/etc/bind/zones/db.10.20.0";
};
```

Save the file and exit.

## 5. Check and reload BIND

Verify the syntax of each zone file using `named-checkzone` and reload BIND to apply changes【576889100224869†L272-L277】:

```bash
sudo named-checkzone example.com /etc/bind/zones/db.example.com
sudo named-checkzone 0.20.10.in-addr.arpa /etc/bind/zones/db.10.20.0
sudo systemctl reload bind9
```

Fix any errors reported by `named-checkzone` before reloading.

## 6. Test forward and reverse lookups

Use `dig` to confirm that DNS resolution is working. Replace the domain and IP addresses with your own. The forward lookup should return the IP for a given hostname, and the reverse lookup should return the hostname for a given IP【576889100224869†L283-L289】:

```bash
dig @127.0.0.1 www.example.com
dig @127.0.0.1 -x 10.20.0.20
```

If you configured MX records, you can query them as well.

## Notes

- Always increment the serial number in the SOA record whenever you modify a zone file to ensure that changes propagate.
- Forward and reverse zones should be consistent; each host with an A record should have a matching PTR record and vice versa【576889100224869†L323-L327】.
- For additional configuration options and logging settings, consult the official BIND documentation.
