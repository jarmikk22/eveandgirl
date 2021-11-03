# Overview

This server provides API for cosmetic shop online.

## Usage

```json
GET /api/products?brand=biotherm&min_price=500&max_price=600&category=skincare&keyword=cleansing
{
    "data": [
        {
        "brand": "Biore",
        "product_name": "Biore cleansing water",
        "category": "skincare",
        "price": 200
        }
    ]
}
```

## Data Structure
#### Product Entity
```json
{
  "brand": "Biore",
  "product_name": "Biore cleansing water",
  "category": "skincare",
  "price": 200
}
```

## References
- project structure: https://www.npmjs.com/package/typescript-express-starter
- gitignore generator: https://www.toptal.com/developers/gitignore

