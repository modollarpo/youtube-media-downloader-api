
# YouTube API Documentation

## Overview
The YouTube API enables developers to interact with YouTube services, allowing for video retrieval, channel data access, and search functionalities.

---

## Table of Contents
- [Authentication](#authentication)
- [Base URL](#base-url)
- [API Endpoints](#api-endpoints)
  - [Get Channel Videos](#get-channel-videos)
  - [Search Videos](#search-videos)
- [Error Handling](#error-handling)
- [Rate Limits](#rate-limits)
- [Contact Information](#contact-information)

---

## Authentication
To access the YouTube API, you need an API key. You can obtain your API key by signing up on the Google Cloud Console.

- **API Key**: `YOUR_YOUTUBE_API_KEY`

## Base URL
The base URL for the YouTube API is:
```
http://yourserver.com/api/youtube
```

---

## API Endpoints

### Get Channel Videos
Retrieve videos from a specific YouTube channel.

- **Endpoint**: `/channel/videos`
- **Method**: `GET`

#### Query Parameters:
- `channelId` (string, required): The ID of the YouTube channel.
- `sortBy` (string, optional): Sort videos by `date` or `relevance` (default: `date`).

#### Example Request:
```http
GET http://yourserver.com/api/youtube/channel/videos?channelId=UCeY0bbntWzzVIaj2z3QigXg&sortBy=date
```

#### Example Response:
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "example_etag",
        "id": {
          "kind": "youtube#video",
          "videoId": "Nsi22POgg40"
        },
        "snippet": {
          "publishedAt": "2024-10-04T10:34:32Z",
          "title": "LIVE: NBC News NOW - Oct. 4",
          "description": "NBC News NOW is live, reporting breaking news...",
          "channelTitle": "NBC News"
        }
      }
      // Additional video objects...
    ]
  }
}
```

### Search Videos
Search for videos on YouTube based on a query string.

- **Endpoint**: `/videos/search`
- **Method**: `GET`

#### Query Parameters:
- `query` (string, required): The search term for videos.
- `maxResults` (integer, optional): Number of results to return (default: 5).

#### Example Request:
```http
GET http://yourserver.com/api/youtube/videos/search?query=cute+cats
```

#### Example Response:
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "kind": "youtube#searchResult",
        "etag": "example_etag",
        "id": {
          "kind": "youtube#video",
          "videoId": "Nsi22POgg40"
        },
        "snippet": {
          "publishedAt": "2024-10-04T10:34:32Z",
          "title": "Cute Cat Compilation",
          "description": "A compilation of cute cats...",
          "channelTitle": "Cat Lovers"
        }
      }
      // Additional video objects...
    ]
  }
}
```

---

## Error Handling
Common error responses include:

- **400 Bad Request**: Invalid parameters supplied.
- **401 Unauthorized**: Invalid API key.
- **404 Not Found**: Endpoint not found.
- **500 Internal Server Error**: Something went wrong on the server.

### Example Error Response
```json
{
  "success": false,
  "message": "Invalid API key"
}
```

---

## Rate Limits
The YouTube API has a rate limit of 100 requests per hour per API key. Exceeding this limit will result in a `429 Too Many Requests` error.

---

## Contact Information
For any inquiries or support, please contact us at:
- **Email**: support@yourdomain.com
- **Website**: [yourdomain.com](http://yourdomain.com)
