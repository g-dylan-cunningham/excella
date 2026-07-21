/**
 * Form Data Handler Script
 * This script creates a web service to accept form submissions and store them in a Google Sheet.
 * 
 * Columns expected in the spreadsheet:
 * - id: A unique identifier for the submission
 * - name: The submitter's name
 * - email: The submitter's email address
 * - message: The content of the submission
 * - received: Timestamp when the submission was received
 */

/**
 * Log utility function to maintain consistent logging format
 * @param {string} message - The message to log
 * @param {Object} [data] - Optional data object to log
 */
function logInfo(message, data) {
  if (data) {
    console.log(message + ': ' + JSON.stringify(data));
  } else {
    console.log(message);
  }
}

/**
 * Log error details with consistent format
 * @param {string} message - Error description
 * @param {Error|Object} error - The error object or details
 */
function logError(message, error) {
  console.error(message + ': ' + error.toString());
  if (error.stack) {
    console.error('Stack trace: ' + error.stack);
  }
}

/**
 * Handles POST requests to the web app
 * This function is automatically called when an HTTP POST request is made to the deployed web app URL
 * 
 * @param {Object} e - The event object containing request details
 * @return {TextOutput} A JSON response indicating success or failure
 */
function doPost(e) {
  logInfo('Received POST request', e);
  
  try {
    // Validate that postData exists
    if (!e || !e.postData || !e.postData.contents) {
      logInfo('e.postData.contents', e)
      // throw new Error('No POST data received');
      const data = {
            id: '141234123',
            name: 'test',
            email: 'testemail',
            'message': 'message',
            'timestamp': new Date().toString(),
          }
      e = {
        postData: { 
          "contents": JSON.stringify(data)
        }
      }
    }
    
    // Parse the incoming JSON data
    logInfo('Parsing request data');
    var data = JSON.parse(e.postData.contents);
    logInfo('Received data', data);
    
    // Validate required fields
    if (!data.id) {
      logInfo('Warning: No ID provided in submission');
    }
    
    // Get the active spreadsheet and the first sheet
    logInfo('Accessing spreadsheet');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    // Get current timestamp for the "received" field
    var timestamp = new Date();
    logInfo('Timestamp created', timestamp);
    
    // Prepare the row data with fallbacks for missing fields
    var rowData = [
      data.id || "",          // Use empty string if id is not provided
      data.name || "",        // Use empty string if name is not provided
      data.email || "",       // Use empty string if email is not provided
      data.message || "",     // Use empty string if message is not provided
      timestamp               // Current timestamp
    ];
    
    logInfo('Prepared row data', rowData);
    
    // Append the row to the sheet
    logInfo('Appending data to spreadsheet');
    sheet.appendRow(rowData);
    logInfo('Data successfully appended');
    
    // Return success response with the processed data
    var response = {
      'result': 'success',
      'message': 'Data successfully recorded',
      'timestamp': timestamp.toString(),
      'row': rowData
    };
    
    logInfo('Returning success response', response);
    return ContentService
      .createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Log the error details
    logError('Error processing request', error);
    
    // Return detailed error response
    var errorResponse = {
      'result': 'error',
      'message': 'Failed to process the request',
      'error': error.toString(),
      'timestamp': new Date().toString(),
    };
    
    logInfo('Returning error response', errorResponse);
    return ContentService
      .createTextOutput(JSON.stringify(errorResponse))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests to the web app
 * Useful for testing if the web app is deployed correctly
 * 
 * @return {TextOutput} A simple text response indicating the web app is running
 */
function doGet() {
  logInfo('Received GET request - deployment test');
  return ContentService.createTextOutput(
    "The form data handler web app is running correctly! " +
    "Send POST requests to this URL to submit data to the spreadsheet."
  );
}

/**
 * Test function that can be run manually from the script editor
 * This helps verify the script's functionality without making actual POST requests
 */
function testAppendRow() {
  logInfo('Running test function');
  
  try {
    // Create test data
    var testData = {
      id: "test-" + new Date().getTime(),
      name: "Test User",
      email: "test@example.com",
      message: "This is a test submission from the script editor."
    };
    
    logInfo('Test data created', testData);
    
    // Get the active spreadsheet and the first sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0];
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Prepare the row data
    var rowData = [
      testData.id,
      testData.name,
      testData.email,
      testData.message,
      timestamp
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    logInfo('Test row successfully added', rowData);
    
  } catch(error) {
    logError('Test function failed', error);
  }
}
