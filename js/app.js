window.onload = () => {
   let headings = document.getElementsByTagName(`h2`),
   paragraphs = document.getElementsByTagName(`span`),
   getContentWidth = element => {
      let styles = getComputedStyle(element);

      return element.clientWidth;
   }

   for (let i = 0; i < headings.length; i++) {
      headings[i].innerHTML += `<br>(${getContentWidth(paragraphs[i])}px)`;
   }
}
