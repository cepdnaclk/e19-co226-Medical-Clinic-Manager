# Run Spring Boot application
1. Install XAMPP ( download it from [Link here](https://www.apachefriends.org) )
2. Open xampp control panel and start `Apache` and `mySQL` modules. Also pay attention to the 'port' that the `mySQL` runs on.
3. Change the following properties in `application.properties` file such that it is suitable for your database configuration
4. Install Maven ( if you dont know, how to install mevan; then watch this [Link Here](https://youtu.be/WASIyomqarc))
5. Run following command `mvn spring-boot:run` in the terminal inside project root directory.

### Dependency
– If you want to use PostgreSQL:
```xml
<dependency>
  <groupId>org.postgresql</groupId>
  <artifactId>postgresql</artifactId>
  <scope>runtime</scope>
</dependency>
```
– or MySQL:
```xml
<dependency>
  <groupId>com.mysql</groupId>
  <artifactId>mysql-connector-j</artifactId>
  <scope>runtime</scope>
</dependency>
```
### Configure Spring Datasource, JPA, App properties
Open `src/main/resources/application.properties`
- For PostgreSQL:
```
spring.datasource.url= jdbc:postgresql://localhost:5432/testdb
spring.datasource.username= postgres
spring.datasource.password= 123

spring.jpa.properties.hibernate.jdbc.lob.non_contextual_creation= true
spring.jpa.properties.hibernate.dialect= org.hibernate.dialect.PostgreSQLDialect

# Hibernate ddl auto (create, create-drop, validate, update)
spring.jpa.hibernate.ddl-auto= update

# App Properties
LifeCare.app.jwtSecret= LifeCareSecretKey
LifeCare.app.jwtExpirationMs= 86400000
```
- For MySQL
```
spring.datasource.url=jdbc:mysql://localhost:3306/testdb?useSSL=false
spring.datasource.username=root
spring.datasource.password=123456

spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update

# App Properties
LifeCare.app.jwtSecret= ======================Eshan=Spring===========================
LifeCare.app.jwtExpirationMs=86400000
```
### Run following SQL insert statements in mySQL console
```
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_MODERATOR');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');
```

# User Registration, User Login and Authorization process.
The diagram shows flow of how we implement User Registration, User Login and Authorization process.

![spring-boot-jwt-authentication-spring-security-flow](spring-boot-jwt-authentication-spring-security-flow.png)

### Spring Boot Server Architecture with Spring Security
You can have an overview of our Spring Boot Server with the diagram below:

![spring-boot-jwt-authentication-spring-security-architecture](spring-boot-jwt-authentication-spring-security-architecture.png)

### Refresh Token

![spring-boot-refresh-token-jwt-example-flow](spring-boot-refresh-token-jwt-example-flow.png)

References for JWT authentication:
> [Secure Spring Boot with Spring Security & JWT Authentication](https://bezkoder.com/spring-boot-jwt-authentication/)
