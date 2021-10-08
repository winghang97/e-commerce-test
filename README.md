# E-Commerce Platform Testing phase

This is a reposity of an e-commerce platform I am currently testing

### Features

- Full featured shopping cart
- Product reviews and rating
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark oders as delivered option
- Checkout process
- Paypal integration
- Database seeder

### Usage

**ENV Variables**
Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongo uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
```

\*\*Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

**Run**

```
//run frontend & backend
npm run dev

//run backend only
npm run server
```

**Seed Database**

```
//Import data
npm run data:import

//Destroy data
npm run data:destroy
```

```
Sample user logins

admin@example.com (Admin)
123456

john@example.com (User)
123456
```

## Things to fix/add

- [x] Add Shop features
- [] Create shop in admin feature
- [] Fix create products in admin
