# E-commerce Application
<!-- PROJECT SHIELDS -->
![MIT License][license-shield]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- TECH STACK SHIELDS -->
[![Next][Next.js]][Next-url]
[![React][React-shield]][React-url]
[![Redux][Redux-shield]][Redux-url]
[![Node][Node-shield]][Node-url]
[![Express][Express-shield]][Express-url]
[![MongoDB][MongoDB-shield]][MongoDB-url]
[![Braintree][Braintree-shield]][Braintree-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/username/CoachSavvy">
    <img src="/public/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">CoachSavvy</h3>

  <p align="center">
    A digital coaching services e-commerce platform with secure authentication and payment processing
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="../../../c:/Users/fine laptop/Downloads/readme.md#about-the-project">About The Project</a>
      <ul>
        <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#features">Features</a></li>
        <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="../../../c:/Users/fine laptop/Downloads/readme.md#getting-started">Getting Started</a>
      <ul>
        <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#prerequisites">Prerequisites</a></li>
        <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#environment-variables">Environment Variables</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#usage">Usage</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#project-structure">Project Structure</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#roadmap">Roadmap</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#contributing">Contributing</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#license">License</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#contact">Contact</a></li>
    <li><a href="../../../c:/Users/fine laptop/Downloads/readme.md#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![CoachSavvy Screen Shot][product-screenshot]](https://coachsavvy-demo.vercel.app)

CoachSavvy is a comprehensive digital coaching services e-commerce platform designed to offer digital products and services. The application features robust authentication mechanisms, including Discord authentication for customers and credential-based authentication for the admin dashboard, ensuring secure access across different user roles.

With a modern, responsive UI built using Aceternity UI and ShadCN components, CoachSavvy delivers an exceptional user experience. The platform integrates with the Braintree payment gateway to provide secure and seamless transaction processing.

### Features

* **Secure Authentication**
  * Discord authentication for customers to make purchases
  * Credential-based authentication for admin dashboard access
  * Protected routes based on user roles

* **Shopping Experience**
  * Centralized cart management with Redux for persistent state across pages
  * Dynamic product listing with filtering and sorting capabilities
  * Detailed product pages with comprehensive information

* **Admin Dashboard**
  * Complete product management (add, update, delete)
  * Sales analytics and reporting
  * User management capabilities

* **Payment Processing**
  * Secure checkout flow with Braintree integration
  * Order history and tracking
  * Receipt generation

* **Responsive Design**
  * Modern UI components using Aceternity UI and ShadCN
  * Mobile-first approach
  * Consistent experience across devices

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React-shield]][React-url]
* [![Redux][Redux-shield]][Redux-url]
* [![Node][Node-shield]][Node-url]
* [![Express][Express-shield]][Express-url]
* [![MongoDB][MongoDB-shield]][MongoDB-url]
* [![NextAuth][NextAuth-shield]][NextAuth-url]
* [![Braintree][Braintree-shield]][Braintree-url]
* [![Aceternity UI][Aceternity-shield]][Aceternity-url]
* [![ShadCN][ShadCN-shield]][ShadCN-url]

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (v16.x or later)
* npm or yarn
* MongoDB instance (local or Atlas)

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/username/CoachSavvy.git
   ```
2. Navigate to the project directory
   ```sh
   cd CoachSavvy
   ```
3. Install dependencies
   ```sh
   npm install
   # or
   yarn install
   ```
4. Set up environment variables (refer to the Environment Variables section)

5. Start the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- ENVIRONMENT VARIABLES -->
## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
# Authentication
DISCORD_CLIENT_AUTH_ID=<Your Discord Client ID>
DISCORD_CLIENT_AUTH_SECRET=<Your Discord Client Secret>
AUTH_SECRET=<Your Auth Secret>

# Payment Gateway
BRAINTREE_MERCHANT_ID=<Your Braintree Merchant ID>
BRAINTREE_PUBLIC_KEY=<Your Braintree Public Key>
BRAINTREE_PRIVATE_KEY=<Your Braintree Private Key>

# Database
MONGO_URI=<Your MongoDB Connection String>

# Application
NEXT_PUBLIC_SITE_URL=<Your Site URL>
```

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- USAGE -->
## Usage

### For Customers

1. Visit the homepage to browse available coaching products and services
2. Log in using Discord authentication
3. Add desired products to your cart
4. Proceed to checkout and complete payment using the Braintree gateway

### For Administrators

1. Access the admin login page
2. Log in using admin credentials
3. Use the dashboard to:
   - Manage products and categories (add, edit, delete)
   - View sales analytics
     

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- PROJECT STRUCTURE -->
## Project Structure

```
CoachSavvy/
├── components/        # Reusable UI components
├── context/           # React context providers
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── models/            # MongoDB schema models
├── pages/             # Next.js pages
│   ├── api/           # API routes
│   ├── admin/         # Admin dashboard pages
│   └── products/      # Product pages
├── public/            # Static assets
├── store/             # Redux store configuration
│   └── slices/        # Redux slices
├── styles/            # Global styles
├── .env               # Environment variables
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- CONTACT -->
## Contact


Nisar Saeed - saeed_nisar@yahoo.com
[![LinkedIn][linkedin-shield]][linkedin-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [NextAuth.js](https://next-auth.js.org/)
* [Discord Developer Portal](https://discord.com/developers/docs/intro)
* [Braintree Developer Documentation](https://developer.paypal.com/braintree/docs)
* [Aceternity UI](https://ui.aceternity.com/)
* [ShadCN](https://ui.shadcn.com/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="../../../c:/Users/fine laptop/Downloads/readme.md#coachsavvy">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/username/CoachSavvy.svg?style=for-the-badge
[contributors-url]: https://github.com/username/CoachSavvy/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/username/CoachSavvy.svg?style=for-the-badge
[forks-url]: https://github.com/username/CoachSavvy/network/members
[stars-shield]: https://img.shields.io/github/stars/username/CoachSavvy.svg?style=for-the-badge
[stars-url]: https://github.com/username/CoachSavvy/stargazers
[issues-shield]: https://img.shields.io/github/issues/username/CoachSavvy.svg?style=for-the-badge
[issues-url]: https://github.com/username/CoachSavvy/issues
[license-shield]: https://img.shields.io/github/license/username/CoachSavvy.svg?style=for-the-badge
[license-url]: https://github.com/username/CoachSavvy/blob/master/LICENSE
[product-screenshot]: ../../../c:/Users/fine laptop/Downloads/assets/screenshot.png

<!-- TECH STACK SHIELDS -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React-shield]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux-shield]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org/
[Node-shield]: https://img.shields.io/badge/-Node.js-black?style=for-the-badge&logo=node.js&logoColor=339933
[Node-url]: https://nodejs.org/
[Express-shield]: https://img.shields.io/badge/-Express.js-35495E?style=for-the-badge&logo=express&logoColor=yellow
[Express-url]: https://expressjs.com/
[MongoDB-shield]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[NextAuth-shield]: https://img.shields.io/badge/NextAuth-black?style=for-the-badge&logo=next.js&logoColor=white
[NextAuth-url]: https://next-auth.js.org/
[Braintree-shield]: https://img.shields.io/badge/Braintree-092E20?style=for-the-badge&logo=braintree&logoColor=white
[Braintree-url]: https://www.braintreepayments.com/
[Aceternity-shield]: https://img.shields.io/badge/Aceternity_UI-2B2D42?style=for-the-badge&logo=react&logoColor=white
[Aceternity-url]: https://ui.aceternity.com/
[ShadCN-shield]: https://img.shields.io/badge/ShadCN-000000?style=for-the-badge&logo=react&logoColor=white
[ShadCN-url]: https://ui.shadcn.com/
[linkedin-url]: https://linkedin.com/in/nisar-saeed/
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge
