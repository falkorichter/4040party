# 4040party - 80s Retro Party Landing Page

A vibrant 80s/retro themed landing page for a 40th birthday party celebration! 🎉

## 🎨 Features

- **80s Retro Aesthetic**: Neon colors (cyan, pink, yellow, green) with geometric patterns
- **Animated Background**: Dynamic geometric shapes with CSS animations
- **Glowing Text Effects**: Neon-style text with glow and pulse animations
- **Reservation Form**: Serverless form submission using FormSubmit.co
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **No Dependencies**: Pure HTML5 and CSS3, no JavaScript required
- **Fast Loading**: Lightweight and performant

## 🚀 Quick Start

Simply open `index.html` in your web browser:

```bash
# Using Python 3
python3 -m http.server 8000

# Or using PHP
php -S localhost:8000

# Then open: http://localhost:8000
```

## 📅 Event Details

- **Event**: 40th Birthday Party - "SAVE THE DATE! DOUBLE POWER!"
- **Date**: 18. April 2026
- **Location**: KUFA, Lehrter Str., Berlin
- **Dresscode**: 80er, Eighties
- **Theme**: 80s/Retro

## 📝 Reservation Form Setup

The reservation form uses [FormSubmit.co](https://formsubmit.co/) - a free serverless form submission service.

### Quick Setup (Required!)

1. Open `index.html`
2. Find line with `action="https://formsubmit.co/your@email.com"`
3. Replace `your@email.com` with your actual email address
4. Save and deploy!

### How It Works

- Guests fill out the form with their details
- FormSubmit.co sends you an email with the submission
- Built-in spam protection (reCAPTCHA)
- No server or database needed!

### Form Fields

- **Name** (required): Guest's name
- **Email** (required): Guest's email address
- **Anzahl Gäste** (required): Number of guests (1-10)
- **Ernährungswünsche** (optional): Dietary preferences
- **Nachricht** (optional): Messages, questions, or song requests

### Advanced Configuration (Optional)

You can customize FormSubmit behavior by editing hidden fields in the form:

```html
<!-- In index.html, modify these hidden inputs: -->
<input type="hidden" name="_subject" value="Neue Party-Anmeldung! 🎉">
<input type="hidden" name="_captcha" value="false">
<input type="hidden" name="_template" value="table">
```

Additional options available at [FormSubmit.co documentation](https://formsubmit.co/):
- `_next`: Redirect to custom thank you page
- `_cc`: CC email addresses
- `_autoresponse`: Auto-reply to submitter

## 🎯 Customization

To customize the landing page:

1. **Update Event Details**: Edit the text in `index.html`
2. **Change Colors**: Modify the color values in `styles.css`
3. **Replace Image**: Update the poster image URL in `index.html` (line 20)
4. **Configure Email**: Update FormSubmit email in the form action URL

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Files

- `index.html` - Main HTML structure
- `styles.css` - 80s retro styling and animations

## 🎉 Party On!

40 JAHRE... DAS IST ERST DAS WARM-UP!