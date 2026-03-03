# 4040party - 80s Retro Party Landing Page

A vibrant 80s/retro themed landing page for a 40th birthday party celebration, built with [Jekyll](https://jekyllrb.com/)! 🎉

Available at https://falkorichter.github.io/4040party/

Available at https://falkorichter.github.io/4040party/gemini/ for a version that was created by gemini (please ignore for now)

## 🎨 Features

- **80s Retro Aesthetic**: Neon colors (cyan, pink, yellow, green) with geometric patterns
- **Animated Background**: Dynamic geometric shapes with CSS animations
- **Glowing Text Effects**: Neon-style text with glow and pulse animations
- **Reservation Form**: Serverless form submission using FormSubmit.co
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Jekyll-Powered**: Uses Jekyll layouts, Liquid templating, and posts for news updates
- **Fast Loading**: Lightweight and performant

## 🚀 Quick Start

This is a [Jekyll](https://jekyllrb.com/) project. To run it locally:

```bash
# Install dependencies
bundle install

# Serve locally with live reload
bundle exec jekyll serve

# Then open: http://localhost:4000/4040party/
```

## 📅 Event Details

- **Event**: 40th Birthday Party - "SAVE THE DATE! DOUBLE POWER!"
- **Date**: 18. April 2026
- **Location**: KUFA, Lehrter Str. 35, Berlin
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
3. **Replace Image**: Update the poster image URL in `index.html`
4. **Add News Posts**: Create new Markdown files in `_posts/` (format: `YYYY-MM-DD-title.md`)
5. **Edit Layouts**: Modify templates in `_layouts/`
6. **Site Settings**: Update title, description, and base URL in `_config.yml`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Project Structure

- `_config.yml` - Jekyll site configuration
- `Gemfile` - Ruby dependencies (Jekyll)
- `index.html` - Main page (uses `default` layout and Liquid templating)
- `styles.css` - 80s retro styling and animations
- `_layouts/` - Jekyll layout templates (`default.html`, `post.html`)
- `_posts/` - News posts in Markdown
- `assets/` - Static assets (images)

## 🎉 Party On!

40 JAHRE... DAS IST ERST DAS WARM-UP!
