<div id="top">

<!-- HEADER STYLE: COMPACT -->
<img src="readmeai/assets/logos/purple.svg" width="30%" align="left" style="margin-right: 15px">

# ROAMAURA

<em></em>

<!-- BADGES -->
<!-- local repository, no metadata badges. -->

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/Express-000000.svg?style=flat-square&logo=Express&logoColor=white" alt="Express">
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat-square&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat-square&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Mongoose-F04D35.svg?style=flat-square&logo=Mongoose&logoColor=white" alt="Mongoose">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat-square&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/EJS-B4CA65.svg?style=flat-square&logo=EJS&logoColor=black" alt="EJS">
<img src="https://img.shields.io/badge/Passport-34E27A.svg?style=flat-square&logo=Passport&logoColor=white" alt="Passport">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat-square&logo=CSS&logoColor=white" alt="CSS">

<br clear="left"/>

## ☀️ Table of Contents

- [☀ ️ Table of Contents](#-table-of-contents)
- [🌞 Overview](#-overview)
- [🔥 Features](#-features)
- [🌅 Project Structure](#-project-structure)
  - [🌄 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [🌟 Prerequisites](#-prerequisites)
  - [⚡ Installation](#-installation)
  - [🔆 Usage](#-usage)
  - [🌠 Testing](#-testing)
- [🌻 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [✨ Acknowledgments](#-acknowledgments)

---

## 🌞 Overview

---

## 🔥 Features

|     | Component        | Details                                                                                                                                               |
| :-- | :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture** | <ul><li>Node.js + Express MVC pattern</li><li>Separation of routes, controllers, and views</li><li>Middleware pipeline for request handling</li></ul> |
| 🔩  | **Code Quality** | <ul><li>No linter/configs detected</li><li>Basic code structure with minimal comments</li><li>Legacy patterns in authentication flow</li></ul>        |

---

## 🌅 Project Structure

```sh
└── Roamaura/
    ├── app.js
    ├── init
    │   ├── data.js
    │   └── index.js
    ├── middleware.js
    ├── models
    │   ├── listing.js
    │   ├── review.js
    │   └── user.js
    ├── node_modules
    │   ├── .bin
    │   ├── .package-lock.json
    │   ├── @hapi
    │   ├── @mongodb-js
    │   ├── @sideway
    │   ├── @types
    │   ├── accepts
    │   ├── ansi-styles
    │   ├── array-flatten
    │   ├── async
    │   ├── balanced-match
    │   ├── body-parser
    │   ├── brace-expansion
    │   ├── bson
    │   ├── bytes
    │   ├── call-bind-apply-helpers
    │   ├── call-bound
    │   ├── chalk
    │   ├── color-convert
    │   ├── color-name
    │   ├── concat-map
    │   ├── connect-flash
    │   ├── content-disposition
    │   ├── content-type
    │   ├── cookie
    │   ├── cookie-signature
    │   ├── debug
    │   ├── depd
    │   ├── destroy
    │   ├── dunder-proto
    │   ├── ee-first
    │   ├── ejs
    │   ├── ejs-mate
    │   ├── encodeurl
    │   ├── es-define-property
    │   ├── es-errors
    │   ├── es-object-atoms
    │   ├── escape-html
    │   ├── etag
    │   ├── express
    │   ├── express-session
    │   ├── filelist
    │   ├── finalhandler
    │   ├── forwarded
    │   ├── fresh
    │   ├── function-bind
    │   ├── generaterr
    │   ├── get-intrinsic
    │   ├── get-proto
    │   ├── gopd
    │   ├── has-flag
    │   ├── has-symbols
    │   ├── hasown
    │   ├── http-errors
    │   ├── iconv-lite
    │   ├── inherits
    │   ├── ipaddr.js
    │   ├── jake
    │   ├── joi
    │   ├── kareem
    │   ├── math-intrinsics
    │   ├── media-typer
    │   ├── memory-pager
    │   ├── merge-descriptors
    │   ├── method-override
    │   ├── methods
    │   ├── mime
    │   ├── mime-db
    │   ├── mime-types
    │   ├── minimatch
    │   ├── mongodb
    │   ├── mongodb-connection-string-url
    │   ├── mongoose
    │   ├── mpath
    │   ├── mquery
    │   ├── ms
    │   ├── negotiator
    │   ├── object-inspect
    │   ├── on-finished
    │   ├── on-headers
    │   ├── parseurl
    │   ├── passport
    │   ├── passport-local
    │   ├── passport-local-mongoose
    │   ├── passport-strategy
    │   ├── path-to-regexp
    │   ├── pause
    │   ├── proxy-addr
    │   ├── punycode
    │   ├── qs
    │   ├── random-bytes
    │   ├── range-parser
    │   ├── raw-body
    │   ├── safe-buffer
    │   ├── safer-buffer
    │   ├── scmp
    │   ├── send
    │   ├── serve-static
    │   ├── setprototypeof
    │   ├── side-channel
    │   ├── side-channel-list
    │   ├── side-channel-map
    │   ├── side-channel-weakmap
    │   ├── sift
    │   ├── sparse-bitfield
    │   ├── statuses
    │   ├── supports-color
    │   ├── toidentifier
    │   ├── tr46
    │   ├── type-is
    │   ├── uid-safe
    │   ├── unpipe
    │   ├── utils-merge
    │   ├── vary
    │   ├── webidl-conversions
    │   └── whatwg-url
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── css
    │   └── js
    ├── README.md
    ├── routes
    │   ├── listing.js
    │   ├── review.js
    │   └── user.js
    ├── schema.js
    ├── utils
    │   ├── ExpressError.js
    │   └── wrapAsync.js
    └── views
        ├── includes
        ├── layouts
        ├── listings
        └── users
```

### 🌄 Project Index

<details open>
	<summary><b><code>C:\USERS\SAWEE\DESKTOP\CODE\WEB DEV\MAJOR PROJECT\ROAMAURA/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/app.js'>app.js</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, let's tackle this<br>- The user wants a summary of the app.js file's role in the project<br>- The main purpose is to set up the Express app and integrate various middleware and routes.First, I need to avoid technical details<br>- So, focus on what the file does overall<br>- It initializes the server, connects to the database, configures middleware for routing and session management, and sets up error handling<br>- Also, the project structure has routes and models<br>- The app.js is the central entry point, orchestrating the app's functionality<br>- Mention the integration of routes and the error handling<br>- Make sure to start with a verb or noun<br>- Keep it concise, around 50-70 words<br>- Let me check the instructions again to ensure I'm not using any prohibited terms<br>- Avoid quotes and code snippets<br>- Okay, that should cover it.</think>Initialize the server, connect to MongoDB, and configure middleware for routing, session management, and authentication<br>- Orchestrate route integrations for listings, reviews, and user interactions while handling errors and rendering dynamic responses via EJS templates.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/middleware.js'>middleware.js</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, the user wants a summary of the middleware.js file's purpose in the project<br>- Let me look at the file content.The file exports several middleware functions<br>- isLoggedIn checks if a user is authenticated, redirecting them to login if not<br>- saveRedirectUrl stores the redirect URL in locals<br>- isOwner ensures the user is the listing owner<br>- validateListing and validateReview use schemas to validate data<br>- isReviewAuthor checks if the user is the review author.So the main purpose is handling authentication, authorization, and data validation<br>- It's central to securing routes and ensuring data integrity<br>- The summary should focus on what these functions achieve without technical details<br>- Start with a verb, keep it concise<br>- Mention security, authorization, validation, and their role in the architecture<br>- Avoid mentioning specific functions, just the overall impact.</think>Enforces authentication and authorization checks, validates data integrity, and manages redirect flows<br>- Central to securing routes, ensuring only authorized users interact with resources, and maintaining data consistency across the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/package-lock.json'>package-lock.json</a></b></td>
					<td style='padding: 8px;'>- Consistent environments, reliable builds, and avoiding version conflicts<br>- Also, mention that its part of the project's dependency management strategy<br>- Wait, the user said to reference additional data about the project<br>- The project name is Airbnb, but maybe that's just the name<br>- The dependencies are for a web app, so the summary should tie the package-lock to maintaining a stable environment for the backend services<br>- Make sure the summary is short and highlights the main purpose without getting into the specifics of the dependencies<br>- Maybe start with the main goal, then the benefits<br>- Avoid terms like lockfileVersion or requires since those are technical details<br>- Alright, putting it all together: The package-lock.json ensures all dependencies are pinned to exact versions, ensuring consistent environments and preventing version conflicts<br>- It's crucial for reliable builds and stable application behavior across different setups.</think><strong>Summary</strong> The <code>package-lock.json</code> file ensures consistent dependency versions across development, testing, and production environments, preventing unexpected changes that could destabilize the application<br>- It locks down exact versions of npm packages (e.g., Express, EJS, Joi) used in the Airbnb project, guaranteeing reliable builds and stable behavior while maintaining compatibility with the projects architecture and ecosystem.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, the user wants a summary of the package.json file's role in the project<br>- Let me start by understanding the context<br>- The project is an Airbnb clone, and the package.json is part of the codebase.The main purpose here is to define the project's dependencies and configurations<br>- The dependencies listed include Express, Mongoose, Passport, and others, which are essential for building a web app with user authentication and database interactions<br>- The scripts section shows the test command is not yet implemented<br>- I need to highlight that package.json sets up the project's structure and dependencies, enabling features like user authentication, session management, and database connectivity<br>- Also, it's the foundation for the app's functionality<br>- Avoid technical details like specific versions or scripts<br>- Focus on the overall role<br>- Start with a verb or noun<br>- Keep it concise, 50-70 words<br>- Make sure not to use any markdown<br>- Let me put that together.</think>Defines the projects dependencies and configuration, enabling core features like user authentication, session management, and database integration<br>- Sets up the foundation for the application's functionality through essential libraries and tooling.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/schema.js'>schema.js</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, the user wants a concise summary of the schema.js file's role in the project<br>- Let me start by understanding the file content<br>- It uses Joi for defining schemas for listings and reviews<br>- The main purpose here is validation.The project structure is given, but the key is to focus on the schema's role without technical details<br>- The user emphasized starting with a verb or noun<br>- So, maybe Validates as the first word<br>- I need to mention that it ensures data integrity for listings and reviews<br>- Also, reference the project's use of Joi for input validation<br>- Keep it within 50-70 words<br>- Avoid any markdown<br>- Make sure not to use phrases like this file or the code<br>- Check if the summary starts with a verb<br>- Validates data integrity for listings and reviews by defining schema rules..<br>- That works<br>- Then mention it enforces required fields and constraints, aligning with the project's validation strategy<br>- That should cover it without being too technical.</think>Validates data integrity for listings and reviews by defining schema rules<br>- Enforces required fields and constraints, ensuring consistent input across the application<br>- Aligns with the projects validation strategy, supporting reliable data handling in API interactions.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- init Submodule -->
	<details>
		<summary><b>init</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ init</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/init\data.js'>data.js</a></b></td>
					<td style='padding: 8px;'>- Init/data.js<br>- The content shows a sampleListings array with objects containing title, description, image, price, location, and country<br>- These look like sample data entries, possibly for listings like vacation rentals or accommodations.The main purpose of this file seems to be providing sample data<br>- But how does it fit into the codebase architecture? If the project is a web application, maybe the data.js is part of an initialization phase, setting up default or test data<br>- The sample listings could be used to populate the UI or backend services during development or testing.The user wants to highlight what the code achieves without diving into technical specifics<br>- So, I should mention that this file serves as a data source for the application's listings, possibly for demonstration or testing<br>- It might be used to populate the UI components or backend APIs with realistic sample data, allowing developers to test functionality without real data.I need to ensure that the summary doesn't mention how the data is structured (like the exact keys or the image URLs) but rather the role of the file<br>- Also, referencing the project structure might help, but since the structure is a placeholder, maybe the main point is that the data.js is part of the init directory, which could be for initializing the app with sample data.Putting it all together, the summary should state that data.js provides sample listing data to support the application's functionality, such as populating UI elements or testing backend services<br>- It's part of the initialization phase, ensuring the app has default data for development and testing purposes.</think><strong>Summary:</strong> The <code>data.js</code> file serves as a foundational data source for the application, providing pre-defined sample listings to populate core features like property listings, search functionality, and UI components<br>- It enables rapid development and testing by supplying realistic default data, ensuring the codebase can demonstrate functionality without relying on external databases or real-time data sources<br>- This file is critical for initializing the app's state and validating workflows during development<br>- <strong>Key Role in Architecture:</strong>-<strong>Data Initialization:</strong> Acts as a static data provider for listings, supporting UI rendering and backend service testing.-<strong>Development Efficiency:</strong> Reduces dependency on external systems, allowing teams to focus on logic and UX.-<strong>Consistency:</strong> Ensures uniform test data across modules, simplifying debugging and feature validation<br>- This file is part of the <code>init</code> directory, indicating its role in bootstrapping the application with essential, static data before dynamic integrations are added.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/init\index.js'>index.js</a></b></td>
					<td style='padding: 8px;'>- Setting up the database with sample data<br>- Keep it concise, around 50-70 words<br>- Make sure not to use any markdown or lists<br>- Check the instructions again to ensure compliance<br>- Alright, that should cover it.</think>Initializes the database connection and populates sample data for the listings module<br>- Sets up the initial dataset with predefined entries, ensuring a consistent starting state for the applications data layer.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- models Submodule -->
	<details>
		<summary><b>models</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ models</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/models\listing.js'>listing.js</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, the user wants a summary of the listing.js file in the models directory<br>- Let me start by understanding the file's purpose<br>- The file defines a Mongoose schema for a Listing model, which includes fields like title, description, image, price, location, country, reviews, and owner.The main purpose here is to structure the data for listings, linking them to reviews and users<br>- The schema also has a post hook for deleting associated reviews when a listing is removed<br>- The user wants the summary to focus on what the code achieves without technical details.I need to avoid using phrases like This file and start with a verb or noun<br>- Also, no quotes or code snippets<br>- The summary should be concise, around 50-70 words<br>- Let me make sure to mention the data structure, the relationships with reviews and users, and the cleanup of reviews on deletion<br>- Keep it high-level and clear.</think>Define data structure for listings, linking to reviews and users<br>- Manages relationships between listings, their associated reviews, and owners<br>- Ensures cascading deletion of reviews when a listing is removed, maintaining data integrity across the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/models\review.js'>review.js</a></b></td>
					<td style='padding: 8px;'>- Defining the data structure for reviews, linking to users, storing comments and ratings, and tracking creation time.I should start with a verb or noun<br>- Maybe Defines the data structure or Models reviews<br>- Then mention the key elements without getting into implementation details<br>- Make sure to reference the project structure, which is a MongoDB-based app with models, routes, etc<br>- Also, ensure it's 50-70 words<br>- Let me check the example response to see how they structured it<br>- They mentioned linking to users, storing ratings, comments, and timestamps<br>- So I need to include those elements concisely<br>- Avoid using this file or code<br>- Alright, let me put that together.</think>Models reviews by linking to users, storing ratings, comments, and timestamps<br>- Defines the structure for capturing feedback with validation constraints<br>- Enables consistent data representation across the application, supporting features like user ratings and historical tracking<br>- Integrates seamlessly with the MongoDB-based architecture for scalable, structured data management.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/models\user.js'>user.js</a></b></td>
					<td style='padding: 8px;'>- Handling user data and authentication<br>- Since passport-local-mongoose is used, the model integrates authentication<br>- The email is required, so thats part of the data structure.I need to avoid code snippets and quotes<br>- Also, the summary should be 50-70 words<br>- Let me check the example response to ensure it's concise<br>- The example starts with Defines the User model which fits the instruction<br>- Then explains it handles user data and authentication, integrates with Passport, and enforces email requirements<br>- That's all within the word limit<br>- I should make sure not to mention technical details like the plugin usage, just that it integrates authentication<br>- Also, mention the email requirement as part of the data structure<br>- That should cover the main points without getting too detailed.</think>Defines the User model for handling user data and authentication<br>- Integrates with Passport for secure login, enforcing email requirements<br>- Serves as a foundational component for user management within the applications backend architecture.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- routes Submodule -->
	<details>
		<summary><b>routes</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ routes</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/routes\listing.js'>listing.js</a></b></td>
					<td style='padding: 8px;'>- Creating, updating, deleting, and retrieving listings<br>- Also, the middleware for authentication and ownership is important<br>- But avoid technical terms like middleware' if possible<br>- Maybe say ensuring only authenticated users can create or modify listings.The summary should start with a verb<br>- Maybe Manages CRUD operations for listings..<br>- Then mention the routes: create, update, delete, and retrieve<br>- Also, note the validation and access control<br>- Keep it concise, around 50-70 words<br>- Let me check the word count<br>- Make sure to avoid quotes and code snippets<br>- Alright, that should cover it.</think>Manages CRUD operations for listings, enabling users to create, update, delete, and retrieve listings<br>- Handles route logic for index, show, new, edit, and direct access<br>- Ensures authentication and ownership checks, while validating data integrity across all actions.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/routes\review.js'>review.js</a></b></td>
					<td style='padding: 8px;'>- Enabling users to create and delete reviews, ensuring authentication and authorship checks, and integrating with the listings and reviews models<br>- Need to mention the overall contribution to the apps functionality without getting into the implementation specifics.Check the word count<br>- Make sure it's between 50-70 words<br>- Avoid using this file or code snippets<br>- Use clear, concise language<br>- Let me put that together.</think>Manages user review creation and deletion for listings<br>- Ensures authenticated users can post reviews and remove their own<br>- Integrates with listings and reviews models to maintain data consistency<br>- Enhances application functionality by enabling interactive feedback mechanisms.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/routes\user.js'>user.js</a></b></td>
					<td style='padding: 8px;'>- Signup, login, logout<br>- Highlight that it manages registration, authentication, and session termination<br>- Also, note the integration with Passport for authentication<br>- Keep it concise, 50-70 words<br>- Avoid markdown and quotes<br>- Make sure its clear and to the point.</think>Manages user authentication flows, handling signup, login, and logout<br>- Coordinates registration, session management, and redirect logic<br>- Integrates with Passport for authentication, ensuring secure user interactions while maintaining state across requests<br>- Central to enabling access control within the application.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- utils Submodule -->
	<details>
		<summary><b>utils</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ utils</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/utils\ExpressError.js'>ExpressError.js</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, the user wants a summary of the ExpressError.js file<br>- Let me start by understanding the context<br>- The project structure is given, and the file is in the utils directory<br>- The file defines a class ExpressError that extends Error, with a constructor taking statusCode and message<br>- It's exported as a module.The main purpose here is to create a custom error class for HTTP responses<br>- The summary needs to focus on what the code achieves without technical details<br>- The user specified to avoid certain phrases and start with a verb or noun<br>- So, I should mention that the code enables consistent error handling by providing a structured way to represent errors with status codes and messages<br>- It's part of the architecture for managing errors in HTTP requests<br>- Need to keep it concise, around 50-70 words<br>- Let me check the instructions again to make sure I don't include quotes or code snippets<br>- Also, the summary should reference the project structure<br>- Since the file is in utils, it's part of the utility modules<br>- The key point is that it standardizes error objects for the entire codebase<br>- That's the main takeaway<br>- Alright, time to put that into a clear, concise sentence starting with a noun or verb.</think>Defines a custom error class for structured HTTP error handling, enabling consistent status code and message propagation across the application<br>- Standardizes error representation for uniform response formatting in request processing pipelines.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/utils\wrapAsync.js'>wrapAsync.js</a></b></td>
					<td style='padding: 8px;'>- Ensuring errors are properly handled without disrupting the application flow.The user specified starting with a verb or noun<br>- Maybe Simplifies error handling or Enables robust error handling<br>- Then mention that it wraps async functions to propagate errors through the middleware pipeline<br>- Also, note that it's part of the utility module, so the project structure's utils directory is relevant<br>- Keep it concise, around 50-70 words<br>- Avoid any markdown and don't use quotes or code snippets<br>- Let me piece that together.</think>Simplifies error handling for async functions by propagating errors through middleware pipelines<br>- Wraps async operations to ensure unhandled rejections are properly surfaced, maintaining application stability<br>- Part of the utility module, it enables consistent error management across the codebase.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- public Submodule -->
	<details>
		<summary><b>public</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ public</b></code>
			<!-- css Submodule -->
			<details>
				<summary><b>css</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ public.css</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/public\css\style.css'>style.css</a></b></td>
							<td style='padding: 8px;'>- Styling the UI components and layout, ensuring responsiveness and visual effects<br>- Avoid technical terms like flexbox or specific classes<br>- Highlight the role in the architecture as the styling foundation for the UI.</think>Defines the visual foundation for the applications UI, styling layout components, navigation, cards, and animations<br>- Establishes global typography, spacing, and interactive effects to ensure a cohesive, responsive design across all pages while enhancing user engagement through subtle transitions and hover feedback.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- js Submodule -->
			<details>
				<summary><b>js</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ public.js</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/public\js\script.js'>script.js</a></b></td>
							<td style='padding: 8px;'>- Client-side form validation, Bootstrap integration, prevents invalid submissions, adds visual feedback<br>- Putting it all together: Client-side form validation enforces Bootstrap styling for user feedback, preventing invalid submissions and ensuring consistent validation state across the application<br>- That's 45 words<br>- Let me check if it meets all the criteria<br>- No markdown, starts with a noun, no technical details<br>- Yes, that should work.</think>Client-side form validation enforces Bootstrap styling for user feedback, preventing invalid submissions and ensuring consistent validation state across the application.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- views Submodule -->
	<details>
		<summary><b>views</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ views</b></code>
			<!-- includes Submodule -->
			<details>
				<summary><b>includes</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ views.includes</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\includes\flash.ejs'>flash.ejs</a></b></td>
							<td style='padding: 8px;'>- Displaying feedback messages<br>- The user wants to avoid technical terms like EJS' or Bootstrap, so I need to keep it high-level.The main purpose is to provide visual feedback to users<br>- The summary should start with a verb or noun<br>- Maybe Displays user feedback messages as the opening<br>- Then mention the types of messages and their styling<br>- Also, note that it's part of the UI components, ensuring consistency<br>- Need to keep it concise, 50-70 words<br>- Let me check the example response to see if it aligns<br>- Yeah, the example starts with a noun, mentions message types, styling, and reusability<br>- That's the direction to go.</think>Displays user feedback messages with consistent styling<br>- Renders success or error alerts using Bootstrap components, ensuring uniform visual feedback across the application<br>- Enhances user experience by providing clear, dismissible notifications for operational outcomes<br>- Integrates seamlessly with the UI layer to maintain a cohesive interface.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\includes\footer.ejs'>footer.ejs</a></b></td>
							<td style='padding: 8px;'>- Social media links, copyright, and legal policies<br>- I need to avoid using phrases like This file and start with a verb or noun<br>- Maybe start with Provides the footer section to make it clear<br>- Mention the key elements: social media icons, copyright notice, and links to privacy and terms<br>- Also, note that it's part of the site's branding and legal framework<br>- Keep it concise, around 50-70 words<br>- Let me check the word count and ensure no technical jargon is included<br>- That should cover the main points without getting into implementation details.</think>Provides the footer section with social media icons, copyright notice, and links to legal policies<br>- Integrates branding and compliance elements, ensuring consistent user experience across the site<br>- Forms part of the sites structural and legal framework.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\includes\navbar.ejs'>navbar.ejs</a></b></td>
							<td style='padding: 8px;'>- Providing navigation links and user authentication options<br>- Its essential to mention the dynamic user state handling, like showing login/signup or logout based on whether the user is logged in.I need to avoid technical terms like EJS or specific classes<br>- Start with a verb or noun<br>- Maybe Provides navigation links as the start<br>- Then mention the dynamic user authentication options<br>- Also, note that it's a reusable component across the application<br>- Keep it within 50-70 words<br>- Let me check the example response to ensure it aligns with the instructions<br>- Avoid quotes, code, bullets<br>- Make sure it's concise and clear.</think>Provides navigation links for core application sections and dynamically displays user authentication options based on session state<br>- Serves as a reusable layout component across the application, ensuring consistent navigation and user interaction flows.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- layouts Submodule -->
			<details>
				<summary><b>layouts</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ views.layouts</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\layouts\boilerplate.ejs'>boilerplate.ejs</a></b></td>
							<td style='padding: 8px;'>- Navbar, footer, content area, and external resources<br>- Also, note that its used across the application<br>- Check the word count<br>- Keep it between 50-70 words<br>- Avoid quotes and code snippets<br>- Make sure it's concise and highlights the main purpose without getting into implementation specifics<br>- Putting it all together: Serves as the base HTML structure for all pages, integrating shared components like the navbar, footer, and content area<br>- Ensures consistent styling and functionality across the application by including essential CSS and JavaScript resources<br>- That should cover it without being too technical.</think>Serves as the base HTML structure for all pages, integrating shared components like the navbar, footer, and content area<br>- Ensures consistent styling and functionality across the application by including essential CSS and JavaScript resources.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- listings Submodule -->
			<details>
				<summary><b>listings</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ views.listings</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\listings\edit.ejs'>edit.ejs</a></b></td>
							<td style='padding: 8px;'>- Enabling edits<br>- Also, start with a verb or noun<br>- Maybe Facilitates editing of listing details..." Check the project structure<br>- The file is in views/listings/edit.ejs, which suggests it's part of a MVC structure<br>- The form's action is to update a listing, so it's part of the UI for editing<br>- Need to mention that it's part of the user interface, allowing updates to fields like title, description, etc<br>- But keep it concise<br>- Avoid quotes and code snippets<br>- Make sure it's 50-70 words<br>- Putting it all together: Facilitates editing of listing details through a structured form interface<br>- Enables users to update title, description, price, and location while maintaining data integrity<br>- Integrates with backend endpoints for seamless listing modifications<br>- That should cover the main purpose without getting into implementation.</think>Facilitates editing of listing details through a structured form interface<br>- Enables users to update title, description, price, and location while maintaining data integrity<br>- Integrates with backend endpoints for seamless listing modifications.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\listings\error.ejs'>error.ejs</a></b></td>
							<td style='padding: 8px;'>- Think>Okay, the user wants a summary for the error.ejs file in their project<br>- Let me start by understanding the context<br>- The file is part of the views/listings directory, which probably handles listing-related views<br>- The error.ejs is likely a template for displaying errors.The main purpose here is to show error messages to users<br>- The layout uses boilerplate, so it's consistent with other pages<br>- The content has a danger alert with the error message<br>- I need to highlight that this file is responsible for rendering error messages in a user-friendly way, maintaining the app's design<br>- Avoid technical terms, focus on the outcome<br>- Make sure it starts with a verb or noun<br>- Keep it concise, around 50-70 words<br>- Don't mention the code structure, just the purpose<br>- Check the instructions again to ensure compliance<br>- Alright, time to put it all together.</think>Displays error messages to users in a consistent, styled format<br>- Integrates with the applications layout system to maintain design coherence<br>- Provides clear, actionable feedback while adhering to the project's UI/UX standards for error handling.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\listings\index.ejs'>index.ejs</a></b></td>
							<td style='padding: 8px;'>- The summary should start with a verb, mention the purpose (displaying listings), note the use of a shared layout, and the key information shown (title, price, image)<br>- Keep it concise, around 50-70 words<br>- Let me check the word count<br>- Avoid quotes and code snippets<br>- Make sure its clear and concise without technical jargon.</think>Displays all listings using a shared layout, presenting each with an image, title, and price<br>- Organizes content into a responsive grid, enabling users to browse listings efficiently<br>- Highlights key details for quick visual scanning while maintaining a clean, structured interface.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\listings\new.ejs'>new.ejs</a></b></td>
							<td style='padding: 8px;'>- Think>Okay, the user wants a summary for the new.ejs file in their project<br>- Let me start by understanding the context<br>- The file is part of a views directory, specifically under listings, so it's likely a view for creating a new listing<br>- The content shows an EJS template with a form for submitting listing details like title, description, image, price, country, and location<br>- The main purpose here is to provide a user interface for creating a new listing<br>- The form fields correspond to the data needed for a listing, and the layout uses a boilerplate<br>- The summary needs to focus on what the code achieves without technical details<br>- I need to avoid phrases like This file and start with a verb or noun<br>- The key points are the form's role in data collection and its integration with the backend<br>- Also, mention the fields involved but not the specifics of the form structure<br>- Keep it concise, around 50-70 words<br>- Let me check the instructions again to ensure compliance<br>- No quotes, code snippets, bullets<br>- Alright, time to draft the summary.</think>A form enables users to input and submit details for a new listing, capturing essential attributes like title, description, image, price, country, and location<br>- It integrates with the backend to create listings, aligning with the applications data model and user workflow for content management.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\listings\show.ejs'>show.ejs</a></b></td>
							<td style='padding: 8px;'>- Think>Okay, let's tackle this query<br>- The user wants a succinct summary of the show.ejs file's purpose within the project's architecture<br>- They provided the file content and project structure.First, I need to avoid technical details<br>- The file is an EJS template for displaying a listing<br>- The main elements are showing listing details, owner info, price, and location<br>- There's also a section for reviews and actions like edit and delete<br>- The summary should start with a verb or noun<br>- Maybe Displays listing details as the main action<br>- Then mention the owner info and pricing<br>- Also, include the review section and user actions<br>- Need to keep it under 70 words<br>- Let me check the example response to ensure I'm following the structure<br>- Make sure not to use any markdown or quotes<br>- Alright, putting it all together concisely.</think>Displays listing details, owner information, and pricing<br>- Renders user-generated reviews and provides edit/delete actions for authenticated users<br>- Integrates with the applications data model to present rental listings and interactive feedback mechanisms within the user interface.</td>
						</tr>
					</table>
				</blockquote>
			</details>
			<!-- users Submodule -->
			<details>
				<summary><b>users</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ views.users</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\users\login.ejs'>login.ejs</a></b></td>
							<td style='padding: 8px;'>- Allowing users to enter credentials and submit them<br>- The summary should start with a verb or noun<br>- Maybe Enables user authentication by providing a login form interface<br>- That's concise<br>- Check the word count<br>- It's within 50-70 words<br>- Also, make sure not to mention any code snippets or use quotes<br>- Align with the project's architecture, which uses EJS for views<br>- Yeah, that should cover it without getting too technical.</think>Enables user authentication by providing a login form interface<br>- Integrates with the applications authentication flow, allowing users to input credentials and submit them securely<br>- Central to the user experience, facilitating access to protected resources within the system.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura/blob/master/views\users\signup.ejs'>signup.ejs</a></b></td>
							<td style='padding: 8px;'>- Think>Okay, let's tackle this query<br>- The user wants a succinct summary of the signup.ejs file's purpose within the codebase<br>- They provided the file content and project structure.First, I need to focus on the main purpose without technical details<br>- The file is an EJS template for a signup form<br>- The key points are that it's part of the user management UI, handles user registration, and integrates with the backend via a POST request to /signup.The project structure shows views/users, so this file is likely in the user authentication section<br>- The form includes fields for username, email, and password, which are essential for account creation<br>- The layout includes a boilerplate, so it's part of a larger app structure.I need to avoid using phrases like This file and start with a verb or noun<br>- Also, no markdown, quotes, or lists<br>- Keep it between 50-70 words<br>- Let me check the example response to ensure alignment<br>- Make sure to mention the form's role in user registration and its integration with the backend endpoint<br>- Avoid technical specifics like HTML tags or EJS syntax<br>- Got it.</think>A user registration form for account creation, enabling new users to input their details<br>- It facilitates interaction with the backend signup endpoint, ensuring structured data submission for user onboarding<br>- Integrates seamlessly with the applications layout system to maintain consistent UI across the user management interface.</td>
						</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 🌟 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚡ Installation

Build Roamaura from the source and intsall dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone ../Roamaura
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd Roamaura
   ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->

    <!-- [![npm][npm-shield]][npm-link] -->
    <!-- REFERENCE LINKS -->
    <!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
    <!-- [npm-link]: https://www.npmjs.com/ -->

    **Using [npm](https://www.npmjs.com/):**

    ```sh
    ❯ npm install
    ```

### 🔆 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### 🌠 Testing

Roamaura uses the {**test_framework**} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## 🌻 Roadmap

- [x] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## 🤝 Contributing

- **💬 [Join the Discussions](https://LOCAL/Major Project/Roamaura/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://LOCAL/Major Project/Roamaura/issues)**: Submit bugs found or log feature requests for the `Roamaura` project.
- **💡 [Submit Pull Requests](https://LOCAL/Major Project/Roamaura/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your LOCAL account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone C:\Users\sawee\Desktop\Code\WEB DEV\Major Project\Roamaura
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to LOCAL**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://LOCAL{/Major Project/Roamaura/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Major Project/Roamaura">
   </a>
</p>
</details>

---

## 📜 License

Roamaura is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## ✨ Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---
