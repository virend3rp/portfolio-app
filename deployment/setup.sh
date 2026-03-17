#!/bin/bash
# Fresh server setup for portfolio on Amazon Linux 2023
# Run once on a new EC2 instance
# Usage: bash deployment/setup.sh

set -e

echo "==> Updating system packages..."
sudo dnf update -y

echo "==> Installing Nginx..."
sudo dnf install -y nginx

echo "==> Installing Node.js 20..."
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs

echo "==> Cloning repository..."
git clone https://github.com/virend3rp/portfolio-app.git /home/ec2-user/portfolio || true

echo "==> Building Next.js app..."
cd /home/ec2-user/portfolio
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
echo "  1. Point virenderparsariya.online A record to this EC2's public IP"
echo "  2. Install SSL: sudo dnf install -y certbot python3-certbot-nginx"
echo "     sudo certbot --nginx -d virenderparsariya.online -d www.virenderparsariya.online"
