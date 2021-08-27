/*Question -
Coding (Logical and Maintainable)
### Setup
You are part of the Build Tools team, responsible for providing bit of functionality that all
other teams make use of in their build scripts/post-commit hooks. You have been asked
to write a function which will take a String file path and return a list of lines found within
that file whose length > 80. You can use a component which handles all File I/O for you.
- Assure the Candidate that this is the full scope of the question, and they understand it.
- If they get hung up on the name of the component and its usage (just tell them it's
whatever they need, but if they still need guidance) it's FileReader, with a “readAll”
method that returns all lines in the file as a Collection of Strings.
- When this is done let the Candidate know that their user community is happy with the
work, and their hard work is in heavy use.
### First New Use Case
A new user community has come to the Candidate with the requirement that
they need the same logic, but it needs to receive a URL String, not a FileHandle String.
Inform the Candidate that they have access to a component which works just like the
FileReader but handles URLs. Call it URLReader.
- At this point the Candidate will either:
-- Bar-meeting: Factor out the filter logic into a helper method and create a new
method which the new use case calls. Refactor the existing code to call the helper
method.

-- Bar-raising: Use the template method pattern and create readers and
filterers which can be plugged in as needed. Create a new API, or potentially version the
first API.

-- Bar-lowering:
(a) Shoehorn this into one method with an if block which tries to switch
on file type - Let the Candidate know that there's no easy way to determine from the
input String which file reader to use. This could lead to the Candidate adding a flag to
the method signature. If this changes the calling semantics for existing users let the
Candidate know they aren't happy. If the Candidate is using a language which has
features such as default or named parameters it's possible to change the method
signature in a way that doesn't upset current customers. This situation will change a
couple use cases from now.
(b) duplicate the code into two methods - It's usually enough to point
the duplication out (or wait for the next use case). For (1)
### Second New Use Case
People from both existing user communities have come to you saying that they
need it to look for lines whose length > 132.
- Bar-meeting:/raising: they have one spot to make this change, and they
parameterize it rather than have it hard-coded to 80 or 132.
- Bar-raising: They continue to pay attention to API versioning.
- Bar-lowering: they have to make this change in two places and/or they hard
code it to be 80 or 132. If the Candidate has used a default parameter to handle the
previous use case and they do that again here, point out that a FilePath user who wants
to use the 132 length they will have to pass in a “false” (or whatever) for the first default
parameter and they don’t like that.
NOTE: if the Candidate’s chosen language supports named parameters they
can get away with munging up the API in a reasonably customer-friendly way.
### Third New Use Case
The Front-end folk have gotten wind of your work, and are already using it with
a line length of 513. They don’t really care about line length but their tooling breaks for
lines whose lengths > 512. But they do care about spelling errors. Let the Candidate
know that they have a component which handles spell checking for them - the
requirement is that they want to see lines whose lengths > 513 or which contain a
spelling error.
Bar-meeting:: create a new API (spellAndLineLengthCheck) which takes the
input and then uses the private helper methods/components to produce the filtered
results. It’s possible to use named parameters to continue to use the same method to
service this use case; ensure there is no code duplication.
Bar-raising: Continue with the filter builder pattern to assemble what is
requested by the user.
Bar-lowering: code duplication, non-backwards-compatible changes to the
public API.
### Fourth New Use Case
The InfoSec guys have gotten wind of your work and want to use it. They are
marginally interested in line length and spelling errors; but very interested in the
presence of certain potentially troubling words (such as “password”). There is a
component which will handle checking for this for you. They want to see line length
violations or spelling check violations or info sec violations.
Bar-meeting:: create a new API which takes the input and then uses the
private helper methods/components to produce the filtered results. At this point the
named/default parameter technique is no longer maintainable.
Bar-raising: Continue with the filter builder pattern to assemble what is
requested by the user.
Bar-lowering: code duplication, non-backwards-compatible changes to the
public API. Ridiculously long method signature.*/ 
class FileReader {
  readAll(path){
    return [
      "",
      "",
      "a function which will take a String file path and return a list of lines found withina function which will take a String file path and return a list of lines found within",
      "a function which will take a String file path and return a list of lines found withina function which will take a String file path and return a list of lines found withina function which will take a String file path and return a list of lines found within"
    ];
  }
}
class URLReader {
  readAll(addy){
    return [
      "html a function which will take a Shtml a function which will take a Shtml a function which will take a Shtml a function which will take a Shtml a function which will take a Shtml a function which will take a Shtml a function which will take a S",
      "ds",
      "html a function which will take a String file path and return a list of lines found withina function which will take a String file path and return a list of lines found within",
      "a function which will take a String file path and return a list of lines found withina function which will take a String file path and return a list of lines found within a function which will take a String file path and return a list of lines found within"
    ];
  }
}
class ReaderUtil {
    constructor(reader){
      this.reader = reader
    }
    read(handle){
      return this.reader.readAll(handle);
    }
}

class Filter {
    constructor(rec) {
        this.filtered = rec;
        this.predicates =[];
    }
    setLineLength(len){
        this.predicates.push(l => l.length > len);
        return this
    }
    setMisspelled(){
        this.predicates.push(a => true);
        return this
    }
    setInsecure(){
        this.predicates.push(a => false);
        return this
    }
    count(){
      return this.filtered.filter(e=> this.predicates.some(p => p(e))).length
    }
}

// const filteredResults = users.filter(el => filters.some(filterEl => el[filterEl.type] === filterEl.name));

/* USAGE files */
let logLines = new ReaderUtil(new FileReader()).read("/file/path");
let logLinesOver80 = new Filter(logLines)
  .setLineLength(80)
  .count()
console.log("logLinesOver80: ",logLinesOver80);

/* USAGE web input */
let remoteLines = new ReaderUtil(new URLReader()).read("www.amazon.com");
let remoteLinesOver100 = new Filter(remoteLines)
  .setLineLength(100)
  .count()
console.log("remoteLinesOver100 : ",remoteLinesOver100);

/* USAGE files file/misspell/not over 520*/
let lines = new ReaderUtil(new FileReader()).read("/www/text.sh");
let logLinesOver512OrMisspelled = new Filter(lines)
  .setLineLength(512)
  .setMisspelled()
  .count()

console.log("logLinesOver512OrMisspelled: ",logLinesOver512OrMisspelled);

/* USAGE files web/misspell/not over 100 / password*/
let remLines = new ReaderUtil(new URLReader()).read("www.amazon.com");
let remoteLinesOver100OrInsecure = new Filter(remLines)
  .setLineLength(1000)
  .setInsecure()
  .count()

console.log("remoteLinesOver100OrInsecure: ",remoteLinesOver100OrInsecure);
// let logLinesLongerThen100OrMisspelledOrInsecure = new LogSpellSecurityUtil(100).getLongLines("/node_modules/passwords.txt");
// console.log("logLinesLongerThen100OrMisspelledOrInsecure : ",logLinesLongerThen100OrMisspelledOrInsecure);
