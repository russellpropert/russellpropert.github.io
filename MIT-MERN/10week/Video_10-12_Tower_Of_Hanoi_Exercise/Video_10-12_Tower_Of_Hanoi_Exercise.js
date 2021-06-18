const paragraph = document.getElementById('results');
const lineBreak = document.createElement('br');
let count = 0;

const moveDisks = (nDisk, from, spare, to) => {
  if (nDisk === 1) {
    count++;
    paragraph.innerText += `${count}. Move disk ${nDisk} from peg ${from} to peg ${to}.`;
    paragraph.appendChild(lineBreak);
  } else {
    moveDisks(nDisk - 1, from, to, spare);
    count++;
    paragraph.innerText += `${count}. Move disk ${nDisk} from peg ${from} to peg ${to}.`;
    paragraph.appendChild(lineBreak);
    moveDisks(nDisk - 1, spare, from, to);
  }
}

disks = 8;

moveDisks(disks, 'A', 'B', 'C');