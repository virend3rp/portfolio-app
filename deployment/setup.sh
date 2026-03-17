#!/bin/bash
# Fresh server setup for portfolio on Ubuntu EC2
# Run once on a new EC2 instance
# Usage: bash deployment/setup.sh

set -e

echo "==> Updating system packages..."
sudo apt update -y && sudo apt upgrade -y

echo "==> Installing Nginx..."
sudo apt install -y nginx

echo "==> Installing Node.js 20..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
sudo apt install -y nodejs

echo "==> Building Next.js app..."
cd /home/ubuntu/portfolio
npm ci
npm run build

echo "==> Copying static assets into standalone output..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo "==> Installing systemd service..."
sudo cp deployment/portfolio.service /etc/systemd/system/portfolio.service
sudo systemctl daemon-reload
sudo systemctl enable portfolio
sudo systemctl start portfolio

echo "==> Installing Nginx config..."
sudo cp deployment/nginx.conf /etc/nginx/conf.d/portfolio.conf
sudo nginx -t && sudo systemctl enable --now nginx && sudo systemctl reload nginx

echo ""
echo "==> Done! Next steps:"
echo "  1. Point virenderparasariya.online A record to this EC2's public IP"
echo "  2. Install SSL:"
echo "     sudo apt install -y certbot python3-certbot-nginx"
echo "     sudo certbot --nginx -d virenderparasariya.online -d www.virenderparasariya.online"
