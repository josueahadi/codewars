class File {
    constructor(fullName, contents) {
        this._fullName = fullName;
        this.contents = contents;
        this._filename = fullName.substring(0, fullName.lastIndexOf('.'));
        this._extension = fullName.slice(fullName.lastIndexOf('.') + 1);
        this.currentLine = 0;
        this.currentIndex = 0;
    }

    get fullName() {
        return this._fullName;
    }

    get filename() {
        return this._filename;
    }

    get extension() {
        return this._extension;
    }

    getContents() {
        return this.contents;
    }

    write(str) {
        if (this.contents == '')
            this.contents += (this.contents ? '\n' : '') + str;
    }

    gets() {
        const lines = this.contents.split("\n");
        if (this.currentLine < lines.length) {
            return lines[this.currentLine++];
        } else {
            return undefined;
        }
    }

    getc() {
        const characters = this.contents.split("");
        if (this.currentIndex < characters.length) {
            return characters[this.currentIndex++];
        } else {
            return undefined;
        }
    }
}

/* TESTS */

/* fullName(property) */

// var myFile = new File("hello.txt", "Hello World");
// console.log(myFile.fullName); // hello.txt
// myFile.fullName = "goodbye.txt"; // Reassignment should fail
// console.log(myFile.fullName); // still "hello.txt"

/* filename(property) */

// var file1 = new File("hello_world.txt", "Hello World");
// console.log(file1.filename); // "hello_world"
// file1.filename = "goodbye_world"; // Reassignment should fail
// console.log(file1.filename); // still "hello_world"

// var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
// console.log(file2.filename); // "class.phptester" - the filename should be correctly identified even if the filename itself contains the '.' character

/* extension(property) */

// var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
// console.log(fileWithComplexName.extension); // "txt"
// fileWithComplexName.extension = "js"; // Reassignment should fail
// console.log(fileWithComplexName.extension); // still "txt"


/* getContents (method) */

// var myFile = new File("hello.txt", "Hello World\nHello World");
// console.log(myFile.getContents()); // "Hello World\nHello World"


/* write (method) */

// var myFile = new File("example.txt", "");
// console.log(myFile.getContents()); // ""
// myFile.write("Line 1");
// console.log(myFile.getContents()); // "Line 1"
// myFile.write("Line 2");
// console.log(myFile.getContents()); // "Line 1\nLine 2"
// myFile.write("Line 3");
// console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"

/* gets (method) */

// var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
// console.log(myFile.gets()); // "Line 1"
// console.log(myFile.gets()); // "Line 2"
// console.log(myFile.gets()); // "Line 3"
// console.log(myFile.gets()); // "Line 4"
// console.log(myFile.gets()); // "Line 5"
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined
// console.log(myFile.gets()); // undefined

/* getc (method) */
// var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
// console.log(myFile.getc()); // "L"
// console.log(myFile.getc()); // "o"
// console.log(myFile.getc()); // "r"
// console.log(myFile.getc()); // "e"
// console.log(myFile.getc()); // "m"
// console.log(myFile.getc()); // " "
// console.log(myFile.getc()); // "i"
// console.log(myFile.getc()); // "p"
// // ... (many calls to myFile.getc())
// console.log(myFile.getc()); // undefined (when number of calls exceeds character count)  