---
title: Create CustomerClientLink 
---

This section describes how to create a CustomerClientLink.



```javascript

// Creating the entity

const customer_client_link = {
    // Your CustomerClientLink here 
}

const results = await customer.customerClientLinks.create(customer_client_link)

console.log(results) // ['customers/1234567890/customerClientLinks/9765432177']

```