---
id: integration_settings
title: Integration Settings
sidebar_label: Integration Settings
---

## Facebook

If this feature is enabled, Manifold will include a "Log in with Facebook" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Facebook account. On successful authentication, Manifold will create a user record \(if it is the user's first time logging in\) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Facebook. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docs/pulls) against our documentation with a correction.

## Requirements

Before adding OAuth support for Facebook to Manifold, you will need a Facebook account, which will allow you to create a Manifold Facebook app.

* If you do not have one, create a Facebook app by following the steps in the [Facebook Developer Docs](https://developers.facebook.com/docs/apps/register#developer-account).

## Callback URL

The Manifold API handles OAuth callbacks. For Facebook, the callback route is located at `/auth/facebook/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name \(FQDN\) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/facebook/callback`.

## Setup Redirect URL

1. Log into your account and app at [Facebook Developers](https://developers.facebook.com).
2. Under the "Products" header in the sidebar, add a new product.
3. Click "Get Started" on the "Facebook Login" item.
4. In the "Valid OAuth redirect URIs" field, enter the callback URL, described above.

![Facebook Redirect Settings](/docs/assets/customizing/facebook-redirect.png)

## Get App ID and Secret ID

1. Navigate back to the dashboard from the sidebar.
2. Copy the values under "App ID" and "App Secret".

![Facebook Dashboard](/docs/assets/customizing/developer-dashboard.png)

## Update Manifold Settings

Back in Manifold, under the "Facebook" header, enter the App ID into the field labeled `Facebook App ID`. Enter the App Secret value into the field labeled `Facebook App Secret`.

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Facebook OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_FACEBOOK_APP_ID=
MANIFOLD_SETTING_SECRETS_FACEBOOK_APP_SECRET=
```

## Twitter

If this feature is enabled, Manifold will include a "Log in with Twitter" button on the login page. Clicking the button will open a popup that allows users to authenticate using their Twitter account. On successful authentication, Manifold will create a user record \(if it is the user's first time logging in\) and an associated identity record.

These instructions document the process for acquiring OAuth keys from Twitter. It's possible that their process has changed since this was written. If that's the case, please [open a pull request](https://github.com/ManifoldScholar/manifold-docs/pulls) against our documentation with a correction.

## Requirements

Before adding OAuth support for Twitter to Manifold, you will need a Manifold Twitter app.

* If you do not have one, create a Twitter app through the [Twitter App Interface](https://apps.twitter.com).

## Callback URL

The Manifold API handles OAuth callbacks. For Twitter, the callback route is located at `/auth/twitter/callback`. For your installation of Manifold, the callback URL will be the fully qualified domain name \(FQDN\) of the API server followed by that path. For example, my Manifold API is on the same domain as the client application, and that domain is `manifoldapp.org`, the callback URL would be `http://manifoldapp.org/auth/twitter/callback`.

## Setup Required URLs

1. Log into your account and app at [Twitter Apps](https://apps.twitter.com).
2. Navigate to the "Settings" tab.
3. In the "Callback URL" field, enter the callback URL, defined above.
4. In the Privacy Policy field, add a link to your privacy policy. This is a required field.
5. In the Terms of Service field, add a link to your terms of service. This is a required field.
6. Save the settings.

![Twitter URLs](/docs/assets/customizing/twitter-urls.png)

## Add Permission Settings

1. Navigate to the "Permissions" tab.
2. Change your app's Access Level to "Read Only".
3. Check the box to "Request email addresses from users".

![Twitter Permissions](/docs/assets/customizing/twitter-access.png)

## Get App ID and Secret ID

1. Navigate to the "Keys and Access Tokens" tab.
2. Copy the values under "Consumer Key \(API Key\)" and "Consumer Secret \(API Secret\)".

![Twitter Settings](/docs/assets/customizing/twitter-settings.png)

## Update Manifold Settings

Back in Manifold, under the "Twitter" header, enter the Consumer Key into the field labeled `Twitter Consumer Key`. Enter the Consumer secret into the field labeled `Twitter Consumer Secret`.

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Google OAuth Integration
MANIFOLD_SETTING_INTEGRATIONS_TWITTER_APP_ID=
MANIFOLD_SETTING_SECRETS_TWITTER_APP_SECRET=
```

## Google Services
---
layout: page
title: Integrations
menus:
  settings:
    weight: 3
---

The `Integrations` menu is where Manifold administrators can leverage external services, including Google, Twitter, and Facebook, for third party authentication, social sharing functionality, and to enable text ingestion from Google Docs.

![Integrations](/docs/assets/customizing/integrations.png)

Before a publisher can input values into each of these fields, they will first need to set up accounts with Google, Facebook, and Twitter as described here:

<a name="google_services"></a>
## Google Services

By configuring Google Services, a publisher will unlock the ability to import texts from Google Docs into the Manifold reader, import resources in bulk into existing projects (using Google Drive), and leverage Google Analytics to get detailed statistics about reader use and interaction with the Manifold instance.

<div style="background: #d4f2ff; margin: 20px 0; padding: 15px;">
<strong>Note</strong>. To make it possible for your readers to log into your Manifold instance using their Google credentials, see the <a href="/docs/customizing/settings/integrations.html#oauth">OAuth section</a> below.
</div>

To begin using these features, you must first complete some configuration through the Google Developer Console.

### Requirements

Before adding Google Services support to Manifold, you will need a Google developer account and a Manifold Google project.

- If you do not have a developer account you can create one at through the [Google Developer Console](https://console.developers.google.com/).
- If you do not have a Manifold Google project you can create one by logging into your developer account and clicking "Create Project."

### Get Credentials Set File

1. Go to the APIs overview by clicking on the "API" card on your project dashboard.
2. Click on the "Credentials" tab in the sidebar.
3. Click to create credentials set for a "Service account key."
4. Select "New service account" from the dropdown.
5. Give your service account a name. You do not need to add a role.
6. Create the credential set.
7. Select "JSON" for the key type and download the `.json` file as `google_service.json`.<sup>[1](#note-1)</sup>

### Update Manifold Settings

Under the "Google Services Integration" header, upload the `google_service.json` file. Doing so will automatically populate the rest of the fields in the section.

![Google Services](/docs/assets/customizing/gservices.png)

Alternatively, if you manage settings in the environment \(`MANAGE_SETTINGS_FROM_ENV=1` in your `.env` file\), you should set the corresponding settings in `.env`:

``` conf
# Config Files
MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE="/var/opt/manifold/api/keys/google_service.json"

## Google Integration
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PROJECT_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_PRIVATE_KEY_ID=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_EMAIL=
MANIFOLD_SETTING_INTEGRATIONS_GOOGLE_CLIENT_ID=
```

If a file path is present at the path set in `MANIFOLD_SETTING_CONFIG_GOOGLE_SERVICE`, values will first be set from this file, then overwritten by any subsequent matching keys.

### Next Steps

With Google Services now configured, you can enable Google Analytics and Drive integrations with your instance, as described in these two sections:

- [Analytics](/docs/customizing/settings/analytics.html)
- [Drive](/docs/customizing/settings/drive.html)

<a name="oauth"></a>
## OAuth

By configuring OAuth, your readers can login to Manifold using their Facebook, Twitter, or Google login. Configuring each OAuth Provider involves generating access tokens and storing them in Manifold. Follow the specific instructions for each provider to set this up.

- [Facebook OAuth](/docs/customizing/settings/facebook.html)
- [Twitter OAuth](/docs/customizing/settings/twitter.html)
- [Google OAuth](/docs/customizing/settings/google.html)

## Notes

<small>
<a name="note-1"></a><sup>1</sup> If managing settings in the environment (through `.env`), add the "google_service.json" file into your app at "/var/opt/manifold/api/keys".
</small>

## Google Oauth

## Google Analytics