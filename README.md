# Protus-next

Protus is a online learning platform used in a reasearch project at NTNU.
it uses X-API track users and their progress and sanity for page creation.

## Authors

- [Johan August Østbye](https://github.com/JohanAOstbye)
- [Vemund Eggemoen](https://github.com/vemund0507)
## Run Locally

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file
```
DATABASE_URL="DATABASE_URL"

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=SECRET


NEXT_PUBLIC_SANITY_PROJECT_ID="PROJECT ID"
NEXT_PUBLIC_SANITY_DATASET="DATASET"
SANITY_API_WRITE_TOKEN="WRITE TOKEN"
SANITY_API_READ_TOKEN="READ TOKEN"

NODE_ENV=development
```
### Run Next.js locally in development mode

```bash
 yarn && yarn dev
```

