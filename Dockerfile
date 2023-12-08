# Use the official NGINX image as the base
FROM nginx:alpine

# Copy the HTML file to the NGINX server
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
