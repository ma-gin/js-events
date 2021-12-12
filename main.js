 /* EXERCISE 1
       Write a function for changing the title of the document in something else.
      */

       const changeTitle = newTitle => {
        // console.log(title)
        document.title = newTitle
    }

    changeTitle("Fantastic Title")

    /* EXERCISE 2
     Write a function for changing the class of the title of the page in "myHeading".
    */
    const heading = document.querySelector("h1") //changed scope to use in other functions

    const addClassToTitle = () => {
        heading.classList.add("myHeading")
    }
    
    addClassToTitle()

    /* EXERCISE 3
     Write a function for changing the text of only the p which are children of a div.
    */

    const changePcontent = text => {
        const pDivChildren = document.querySelectorAll("div p") //returns array
        for (let i = 0; i < pDivChildren.length; i++) pDivChildren[i].innerText = text
    }

    changePcontent("New Inserted Text for all <p> children of <div> elements.")

    /* EXERCISE 4
     Write a function for changing the href property of every link to https://www.google.com
    */

    const changeUrls = () => {
        // const links = document.getElementsByName("a")
        const links = document.querySelectorAll("a") //returns array
        for (let i = 0; i < links.length; i++) links[i].href = "https://www.google.com" //changes every link on the page
    }

    changeUrls()

    /* EXERCISE 5
     Write a function for adding a new list item in the second unordered list.
    */

    const addToTheSecond = content => {
      const newListItemNode = document.createElement("li")
      newListItemNode.innerText = content
      document.getElementById("secondList").appendChild(newListItemNode)
    }

    addToTheSecond("NEW ITEM")

    /* EXERCISE 6
     Write a function for adding a second paragraph to the first div.
    */

    const addParagraph = content => {   //the instructions don't make sense here --(assuming it has one?)
      const divNodeArray = document.querySelectorAll("div")
      const pNodeObject = document.querySelector("p")
      for (let i = 0; i < divNodeArray.length; i++){
        if (divNodeArray[i].contains(pNodeObject) === true) {
          const newPelement = document.createElement("p")
          newPelement.innerText = content
          divNodeArray[i].appendChild(newPelement)
    }}}

    addParagraph("It Works!")

    /* EXERCISE 7
     Write a function for making the first unordered list disappear.
    */

    const firstUlDisappear = function () {
        const firtUl = document.getElementById("firstList")
        firtUl.style.display = "none"
      //
    };

    firstUlDisappear()
    
    /* EXERCISE 8
     Write a function for making the background of every unordered list green.
    */

    const paintItGreen = function () {
        const uLists = document.getElementsByTagName("ul")
        // for (let i = 0; i < uLists.length; i++) uLists[i].style.background = "green" //changes every link on the page
        for (let i = 0; i < uLists.length; i++) uLists[i].style.background = "green"
    }

    paintItGreen()

    /* EXERCISE 9
     Make the heading of the page change color every time the user clicks on it.
    */
    const random255 = () =>{
      return Math.round(Math.random() * 255)
    }

    const generateRandomColor = () => {
      const red = random255()
      const green = random255()
      const blue = random255()
      return `rgb(${red}, ${green}, ${blue}`
    }

    const makeItClickable = () => {
      const newColor = generateRandomColor()
      console.log(newColor)
      heading.style.color = newColor
    }

    /* EXERCISE 10
     Change the footer text with something else when the user clicks on it.
    */

    const changeFooterText = text => {
      let footer = document.querySelectorAll("div h2")
      footer = footer[footer.length - 1]
      // console.log(footer)
      footer.innerText = text
    }

    changeFooterText("New footer text is amazing!!")

    /* EXERCISE 11
     Attach an event listener to the input field in the page for console logging its value just after any keystroke.
    */

    const logInput = (e) => {
      const newLetter = document.createElement("span")
      const inputField = document.getElementById("input-div")
      newLetter.innerText = e.key
      inputField.appendChild(newLetter)
      newLetter.style.color = generateRandomColor()
    }
    
    /* EXERCISE 12
     Create a welcome alert message when the page successfully loads.
    */

    // window.onload = () => alert("       Oi!")

    /* EXERCISE 13
     Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
    */