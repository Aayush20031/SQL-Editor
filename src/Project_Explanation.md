# Project Explanation Document

## Project Overview
This project is designed to manage customer and supplier information for a business. It allows users to store, retrieve, and manage data related to customers and suppliers, facilitating better business operations and relationships.

## Key Features
- **Customer Management**: Users can add, update, and delete customer information.
- **Supplier Management**: Users can manage supplier details, including contact information and product offerings.
- **Data Relationships**: The project establishes relationships between customers and suppliers, allowing for efficient order management and tracking.

## Architecture
The project is structured into several key components:
- **Data Store**: Contains JSON files for storing customer and supplier data.
- **Entities**: Defines the main entities involved in the project, including Customers and Suppliers.
- **User Interface**: Provides a user-friendly interface for interacting with the data.

## Entities

### Customer
- **customerID**: Unique identifier for each customer.
- **companyName**: Name of the customer's company.
- **contactName**: Name of the primary contact person at the company.
- **contactTitle**: Title of the contact person.
- **address**: Street address of the customer.
- **city**: City where the customer is located.
- **region**: Region or state where the customer is located.
- **postalCode**: Postal code for the customer's address.
- **country**: Country where the customer is located.
- **phone**: Contact phone number for the customer.
- **fax**: Fax number for the customer.

### Supplier
- **supplierID**: Unique identifier for each supplier.
- **companyName**: Name of the supplier's company.
- **contactName**: Name of the primary contact person at the supplier.
- **contactTitle**: Title of the contact person.
- **address**: Street address of the supplier.
- **city**: City where the supplier is located.
- **region**: Region or state where the supplier is located.
- **postalCode**: Postal code for the supplier's address.
- **country**: Country where the supplier is located.
- **phone**: Contact phone number for the supplier.
- **fax**: Fax number for the supplier.
- **homePage**: URL of the supplier's homepage.

## Usage Instructions
1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Run the application to start managing customer and supplier data.
4. Use the user interface to add, update, or delete records as needed.

This document serves as a comprehensive guide to understanding the project, its features, and how to use it effectively.
