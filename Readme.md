## Dashletter frontend

This is the frontend website that will be accesible to people on dashletter.com.

### Setup

To deploy on this server we can either use apache2 or nginx. Both of them should do the work but for simplicity prefer `apache2`.

* Install apache2:
    - `sudo apt install apache2`

* Once this server is installed then just move all the frontend files to `/var/www/html` directory.
* Now restart the apache2 service:
    - `systemctl restart apache2`

And then we must be able to see the website running. If some issue/error persists then you can check the `status` of the apache2 by running `systemctl status apache2` or even better use `journalctl`.

__Tip__: If you are going to run this website on low grade system then maybe try to use `lighttpd` server instead of apache2 or nginx, that will consume less CPU. But also remember this is a JS website so if you plan to scale this website and add more code than stick with apache2/nignx.
