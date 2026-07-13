# UAE Real Estate Listing Manager

A fast, lightweight, browser-based real estate listing manager designed for UAE property professionals.

The application helps brokers, agents, and real estate companies organize listings, import property details from WhatsApp or chat messages, upload property photos, export records, and create print-ready property sheets with Alhamoudi Real Estate branding.

## Features

- Add, edit, duplicate, and delete property listings
- UAE emirate selection
- Sale, rent, off-plan, investment, and joint-venture categories
- Property status tracking
- Live search, filters, and sorting
- Automatic browser storage using `localStorage`
- Drag-and-drop property photo upload
- Property photo URL support
- Google Maps or location link field
- WhatsApp listing template
- Import property information from chat or text
- Import TXT, CSV, and JSON files
- Export listings to CSV
- Export and restore JSON backups
- Print individual listings
- Print the full property portfolio
- Alhamoudi Real Estate print letterhead
- Gold and black theme
- Light and dark appearance modes
- Responsive desktop, tablet, and mobile layout
- No database or server required

## Included File

Rename the main HTML file to:

```text
index.html
```

Recommended project structure:

```text
uae-real-estate-listing-manager/
├── index.html
└── README.md
```

## Run Locally

No installation is required.

1. Download or clone the repository.
2. Open `index.html` in Chrome, Edge, Safari, or Firefox.
3. Start adding property listings.

You can also use a local development server.

### Python

```bash
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

### Visual Studio Code

Install the **Live Server** extension, right-click `index.html`, and select:

```text
Open with Live Server
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html` and `README.md`.
3. Open the repository **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose:

```text
Deploy from a branch
```

6. Select:

```text
Branch: main
Folder: /root
```

7. Save the settings.

Your website will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## WhatsApp Listing Template

The application includes a ready-to-copy property listing template:

```text
🏠 ALHAMOUDI REAL ESTATE LISTING

Property Title:
Purpose: Sale / Rent / Off-plan / Investment / JV
Property Type:
Emirate:
Area / Community:
Location Link:

Price: AED
Size: sq ft
Bedrooms:
Bathrooms:
Status: Available / Reserved / Sold / Rented / Under Offer

Reference:
Agent:
Contact / WhatsApp:

Main Features:
-
-
-

Photo URL:

Notes:
```

Complete the template in WhatsApp, copy the message, then paste it into the **Import Chat / File** section.

## Data Storage

Listings are stored locally inside the browser using `localStorage`.

This means:

- Data remains available when the page is reopened on the same browser and device.
- Data is not automatically shared between devices.
- Clearing browser storage may remove saved listings.
- Regular JSON backups are recommended.

Use:

```text
Backup JSON
```

to download a copy of all listings.

Use:

```text
Restore
```

to import a saved backup.

## Photo Storage

Uploaded photos are converted into browser-readable data and stored with the listing.

For better performance:

- Use JPG or WEBP files
- Keep images below 2 MB where possible
- Avoid uploading very large images
- Use photo URLs for large property portfolios

## Print and PDF

The application supports A4-ready printing.

To create a PDF:

1. Select **Print**.
2. Choose **Save as PDF**.
3. Select A4 paper size.
4. Enable background graphics for the best result.
5. Save the file.

The printed version includes:

- Alhamoudi Real Estate logo
- Company name
- Phone and WhatsApp
- Email
- Website
- Dubai, UAE location
- Property cards and listing details

## Company Contact

**Alhamoudi Real Estate L.L.C.S.O.C.**

- Phone / WhatsApp: `+971 50 880 0104`
- Email: `info@ahre.ae`
- Website: `www.ahre.ae`
- Location: Dubai, United Arab Emirates

## Browser Compatibility

Recommended browsers:

- Google Chrome
- Microsoft Edge
- Safari
- Mozilla Firefox

For the best printing and PDF output, use the latest version of Chrome or Edge.

## Limitations

- Data is stored locally and is not synchronized automatically.
- There is no login or user account system.
- There is no cloud database.
- Very large image uploads may increase browser storage usage.
- Chat parsing should be reviewed before publishing a listing.

## Future Improvements

Possible future additions:

- Firebase or Supabase cloud database
- User login and team accounts
- Arabic and English language switch
- Broker commission calculator
- Mortgage and ROI calculator
- Property comparison tool
- Automatic PDF flyer generation
- WhatsApp sharing button
- Google Maps preview
- Agent performance dashboard
- Developer and project database
- Cloud image storage
- Listing expiry reminders

## License

This project is prepared for Alhamoudi Real Estate.

Before publishing it as an open-source project, add the license that matches your intended use.

For private company use, you may add:

```text
Copyright © 2026 Alhamoudi Real Estate L.L.C.S.O.C.
All rights reserved.
```

## Disclaimer

Property details, prices, availability, and imported information should be verified before being shared with clients or published publicly.

This application is an organizational tool and does not replace official property documentation, regulatory checks, or legal review.
