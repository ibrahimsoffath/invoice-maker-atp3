# Charter Invoices (Android app)

An offline invoice app for boat charter trips. Invoices, customers, your logo and payment status
are stored on the phone. Invoices are shared as PDF files, and a Backup button saves everything to a file.

## Get the APK (no coding, about 10 minutes)

You need a free GitHub account (https://github.com).

1. Create a new repository on GitHub (any name, set to Private).
2. Upload everything from this folder into it, including the hidden `.github` folder.
   On the repository page choose "Add file", then "Upload files", and drag the whole folder in.
3. Open the "Actions" tab. Choose "Build Android APK", then "Run workflow".
4. Wait 5 to 10 minutes until the run shows a green tick.
5. Open the finished run and download `charter-invoices-apk` from "Artifacts". Unzip it to get `app-debug.apk`.
6. Send `app-debug.apk` to your Android phone (Google Drive, email, USB).
7. Open it on the phone. If asked, allow "Install unknown apps" for the app you opened it from.

## Using the app

- Business and logo tab: enter your business details and upload your logo first.
- Invoice tab: add trips, save, then "Share as PDF" to send by WhatsApp, Viber, email or save to Drive.
- History tab: mark invoices paid or not paid, search, reopen and delete.
- Business and logo tab, Backup: make a backup regularly. If the phone is lost, reset, or the app is
  uninstalled, invoices that were never backed up are gone. Use "Restore" to load a backup on any phone.

## Notes

- This is a debug build. It installs fine for your own use but cannot be uploaded to the Play Store.
  A signed release build is needed for the Play Store; ask for help with that when you are ready.
- The app uses the default Capacitor icon until you add your own.
- The PDF uses a standard Latin font, so Dhivehi (Thaana) text will not show in the PDF.
