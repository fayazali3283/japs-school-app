#!/bin/bash

echo "💀 Killing all Node.js processes..."
pkill node 2>/dev/null || true
sleep 1

# Start backend
echo " Starting backend on port 5000..."
cd ~/school-app/server
node server.js &

sleep 2

# Start frontend with live reload
echo " Starting frontend with live reload on port 3000..."
cd ~/school-app/frontend
live-server --port=3000 --host=0.0.0.0 --no-browser

echo "✅ Backend: http://0.0.0.0:5000"
echo "✅ Frontend: http://10.129.113.209:3000"
