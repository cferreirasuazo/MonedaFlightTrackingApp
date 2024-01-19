export default function validateCode(code: string) {
  // Remove any leading/trailing whitespace and convert to uppercase for consistency
  code = code.trim().toUpperCase()

  // Define regular expressions for ICAO and IATA codes
  var icaoRegex = /^[A-Z0-9]{}\d{4}$/;
  var iataRegex = /^[A-Z0-9]{3,4}\d{4}$/;
  

  // Check the code against the regular expressions
  if (icaoRegex.test(code)) {
    return "iato"
  } else if (iataRegex.test(code)) {
    return "icao"
  } else {
    throw new Error("Invalid Code")
  }
}
