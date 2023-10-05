// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
// Example JavaScript code to handle Turbo Streams (typically in application.js)
import { Turbo } from "@hotwired/turbo-rails";

// Turbo Streams will automatically update the DOM
Turbo.connectStreamSource(new WebSocket('/turbo-stream'));
