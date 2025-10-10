# Build stage
FROM maven:3.8.4-openjdk-11 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Package stage
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/freelancer-marketplace-0.0.1-SNAPSHOT.jar .
EXPOSE 8080
CMD ["java", "-jar", "freelancer-marketplace-0.0.1-SNAPSHOT.jar"]
