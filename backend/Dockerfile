# Use the official Golang image as a parent image
FROM golang:1.19-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the Go app
RUN go build -o main .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the executable
CMD ["./main"]
