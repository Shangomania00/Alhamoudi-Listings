# UAE Real Estate Listing Manager

A lightweight, browser-based property listing manager built for UAE real estate brokers, agents, and companies.

The application helps organize property listings, import one structured listing from WhatsApp or chat, upload property photos, add map links, export records, and generate print-ready property sheets with Alhamoudi Real Estate branding.

## Main Features

- Add, edit, duplicate, and delete property listings
- Live search, filters, and sorting
- UAE emirate selection
- Sale, rent, off-plan, investment, and joint-venture categories
- Property availability and status tracking
- Automatic browser storage using `localStorage`
- Drag-and-drop property photo upload
- Property photo URL support
- Google Maps or location URL support
- One-listing WhatsApp import template
- Accurate field-by-field import
- TXT, CSV, and JSON file support
- CSV export
- JSON backup and restore
- Print one listing
- Print the full property portfolio
- A4-ready Alhamoudi Real Estate letterhead
- Black and light-gold visual theme
- Light and dark appearance modes
- Responsive desktop, tablet, and mobile layout
- No database or installation required

## Project Files

Recommended repository structure:

```text
uae-real-estate-listing-manager/
├── index.html
└── README.md
```

Rename the main HTML file to:

```text
index.html
```

## Run Locally

No installation is required.

1. Download or clone the repository.
2. Open `index.html` in Chrome, Edge, Safari, or Firefox.
3. Start adding listings.

You can also use a local web server.

### Python

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Visual Studio Code

Install the **Live Server** extension, right-click `index.html`, and select:

```text
Open with Live Server
```

## Deploy to GitHub Pages

1. Create a GitHub repository.
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

7. Save.

Your website will be available at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Correct WhatsApp Import Format

Use the template below for **one property listing only**.

Do not keep multiple choices in the completed listing. Enter only the final selected value for fields such as Purpose and Status.

```text
🏠 ALHAMOUDI REAL ESTATE LISTING
Property Title:
Purpose:
Property Type:
Emirate:
Area / Community:
Location Link:
Price: AED
Size: sq ft
Bedrooms:
Bathrooms:
Status:
Reference:
Agent:
Contact / WhatsApp:
Main Feature 1:
Main Feature 2:
Main Feature 3:
Photo URL:
Notes:
```

### Completed Example

```text
🏠 ALHAMOUDI REAL ESTATE LISTING
Property Title: Luxury Villa in Nad Al Sheba
Purpose: Sale
Property Type: Villa
Emirate: Dubai
Area / Community: Nad Al Sheba 3
Location Link: https://maps.google.com/
Price: AED 5,500,000
Size: 7,000 sq ft
Bedrooms: 4
Bathrooms: 5
Status: Available
Reference: AHRE-001
Agent: Saif Alfalasi
Contact / WhatsApp: +971 50 880 0104
Main Feature 1: Spacious private garden
Main Feature 2: Covered parking
Main Feature 3: Vacant and ready
Photo URL: https://example.com/property-photo.jpg
Notes: Serious buyers only.
```

## Import Instructions

1. Open **Import Chat / File**.
2. Copy the WhatsApp template.
3. Complete all available fields.
4. Paste only one completed listing into the import box.
5. Select **Parse & Add Listing**.
6. Review the imported record before publishing or sharing.

The importer reads the fields individually and maps them to the correct listing form.

## Import Accuracy

The corrected importer is designed to prevent the following issues:

- The heading being used as the property title
- The emirate being inserted into the community field
- The full pasted message appearing inside Notes
- Bedrooms and bathrooms being mapped incorrectly
- Blank lines creating duplicate records
- Reference, agent, map link, or photo URL being missed
- Multiple features being merged into one unstructured paragraph

For best results:

- Keep the field names unchanged
- Use one listing per pasted message
- Enter one value per field
- Avoid adding unrelated text before the heading
- Review imported values before saving or sharing

## Property Fields

Each listing can include:

- Property title
- Emirate
- Purpose
- Property type
- Status
- Area or community
- Location link
- Price
- Size in square feet
- Bedrooms
- Bathrooms
- Reference number
- Agent name
- Contact or WhatsApp number
- Property photo
- Main Feature 1
- Main Feature 2
- Main Feature 3
- Notes

## Data Storage

Listings are stored locally in the browser using `localStorage`.

This means:

- Listings remain available on the same browser and device.
- Data is not automatically synchronized between devices.
- Clearing browser storage may delete saved listings.
- Regular JSON backups are recommended.

Use:

```text
Backup JSON
```

to download all listings.

Use:

```text
Restore
```

to import a saved backup.

## Photo Uploads

The application supports:

- Drag-and-drop photo upload
- Click-to-upload photo selection
- JPG
- PNG
- WEBP
- External photo URLs

For better performance:

- Use compressed JPG or WEBP files
- Keep images below 2 MB where possible
- Avoid storing many very large images in the browser
- Use hosted photo URLs for large portfolios

## Location Links

Paste a Google Maps or other location URL into:

```text
Location Link
```

The property card will display an **Open Location** link.

## Print and PDF

The application supports A4-ready printing.

To create a PDF:

1. Select **Print**.
2. Choose **Save as PDF**.
3. Select A4 paper size.
4. Enable background graphics.
5. Save the file.

The printed output includes:

- Alhamoudi Real Estate logo
- Company name
- Phone and WhatsApp
- Email
- Website
- Dubai, UAE location
- Listing details
- Property image
- Main features
- Company footer

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

For the best PDF and print output, use the latest version of Chrome or Edge.

## Limitations

- Data is stored locally and is not automatically synchronized.
- There is no user login system.
- There is no cloud database.
- Very large image uploads may exceed browser storage limits.
- Imported listing details should always be reviewed.
- The application does not replace official contracts, title documents, permits, or regulatory checks.

## Suggested Future Improvements

- Firebase or Supabase cloud database
- Team accounts and user login
- Arabic and English language switching
- WhatsApp direct-share button
- Google Maps preview
- Automatic branded PDF flyer generation
- Property comparison tool
- Mortgage calculator
- ROI calculator
- Broker commission calculator
- Listing expiry reminders
- Agent performance dashboard
- Developer and project database
- Cloud image storage

## License

This project is prepared for Alhamoudi Real Estate.

For private company use:

```text
Copyright © 2026 Alhamoudi Real Estate L.L.C.S.O.C.
All rights reserved.
```

Add a suitable open-source license before publishing the repository for public reuse.

## Disclaimer

Property prices, availability, dimensions, locations, photos, and imported information must be verified before being shared with clients or published publicly.

This application is an organizational tool and does not replace official property documentation, legal review, or UAE real estate regulatory requirements.
