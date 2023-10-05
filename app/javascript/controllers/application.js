import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

// Example JavaScript code to handle Turbo Streams (typically in application.js)
import { Turbo } from "@hotwired/turbo-rails";

// Turbo Streams will automatically update the DOM
Turbo.connectStreamSource(new WebSocket('/turbo-stream'));

