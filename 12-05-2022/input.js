// "[H]                 [Z]         [J]",
// "[L]     [W] [B]     [G]         [R]",
// "[R]     [G] [S]     [J] [H]     [Q]",
// "[F]     [N] [T] [J] [P] [R]     [F]",
// "[B]     [C] [M] [R] [Q] [F] [G] [P]",
// "[C] [D] [F] [D] [D] [D] [T] [M] [G]",
// "[J] [C] [J] [J] [C] [L] [Z] [V] [B]",
// "[M] [Z] [H] [P] [N] [W] [P] [L] [C]",
// " 1   2   3   4   5   6   7   8   9 ",

const input = [
"move 3 from 2 to 1",
"move 8 from 6 to 4",
"move 4 from 8 to 2",
"move 3 from 1 to 9",
"move 1 from 2 to 4",
"move 3 from 7 to 5",
"move 3 from 9 to 2",
"move 3 from 3 to 5",
"move 1 from 5 to 1",
"move 5 from 1 to 8",
"move 2 from 1 to 8",
"move 3 from 7 to 3",
"move 1 from 8 to 9",
"move 6 from 9 to 8",
"move 3 from 8 to 7",
"move 7 from 8 to 9",
"move 2 from 5 to 9",
"move 2 from 2 to 9",
"move 3 from 3 to 7",
"move 2 from 8 to 3",
"move 7 from 4 to 8",
"move 3 from 4 to 1",
"move 4 from 8 to 6",
"move 4 from 6 to 1",
"move 8 from 1 to 2",
"move 1 from 1 to 4",
"move 3 from 5 to 1",
"move 8 from 9 to 8",
"move 4 from 3 to 1",
"move 5 from 5 to 3",
"move 2 from 7 to 1",
"move 1 from 7 to 4",
"move 1 from 7 to 2",
"move 3 from 3 to 5",
"move 3 from 9 to 1",
"move 9 from 8 to 1",
"move 2 from 9 to 7",
"move 1 from 8 to 5",
"move 4 from 5 to 3",
"move 1 from 3 to 4",
"move 1 from 9 to 6",
"move 1 from 6 to 9",
"move 7 from 4 to 9",
"move 1 from 7 to 3",
"move 1 from 8 to 2",
"move 8 from 2 to 1",
"move 4 from 3 to 5",
"move 2 from 9 to 6",
"move 2 from 6 to 2",
"move 2 from 4 to 9",
"move 8 from 9 to 2",
"move 3 from 7 to 9",
"move 1 from 3 to 5",
"move 2 from 3 to 8",
"move 9 from 2 to 1",
"move 1 from 8 to 7",
"move 4 from 2 to 9",
"move 4 from 5 to 6",
"move 1 from 8 to 9",
"move 27 from 1 to 2",
"move 1 from 6 to 4",
"move 3 from 6 to 4",
"move 7 from 9 to 8",
"move 4 from 4 to 1",
"move 9 from 2 to 6",
"move 2 from 1 to 9",
"move 6 from 1 to 3",
"move 1 from 5 to 3",
"move 3 from 3 to 5",
"move 3 from 5 to 3",
"move 3 from 3 to 1",
"move 4 from 6 to 7",
"move 3 from 9 to 2",
"move 1 from 6 to 4",
"move 4 from 3 to 5",
"move 3 from 6 to 5",
"move 1 from 6 to 2",
"move 15 from 2 to 3",
"move 5 from 5 to 9",
"move 13 from 3 to 9",
"move 2 from 5 to 7",
"move 1 from 4 to 2",
"move 3 from 3 to 7",
"move 11 from 2 to 7",
"move 7 from 9 to 5",
"move 3 from 5 to 7",
"move 6 from 8 to 9",
"move 4 from 1 to 2",
"move 6 from 1 to 6",
"move 3 from 5 to 1",
"move 1 from 8 to 2",
"move 4 from 2 to 9",
"move 1 from 5 to 7",
"move 6 from 7 to 6",
"move 18 from 7 to 5",
"move 1 from 7 to 1",
"move 8 from 9 to 5",
"move 1 from 2 to 6",
"move 15 from 5 to 6",
"move 6 from 5 to 3",
"move 4 from 3 to 6",
"move 26 from 6 to 5",
"move 2 from 1 to 7",
"move 4 from 5 to 9",
"move 8 from 5 to 7",
"move 3 from 7 to 9",
"move 14 from 9 to 8",
"move 7 from 5 to 2",
"move 4 from 2 to 1",
"move 5 from 1 to 9",
"move 12 from 5 to 3",
"move 5 from 8 to 5",
"move 14 from 3 to 2",
"move 1 from 5 to 2",
"move 10 from 2 to 6",
"move 7 from 9 to 6",
"move 6 from 8 to 6",
"move 1 from 2 to 7",
"move 2 from 9 to 7",
"move 2 from 8 to 6",
"move 6 from 2 to 7",
"move 1 from 1 to 8",
"move 15 from 6 to 2",
"move 1 from 6 to 9",
"move 1 from 5 to 9",
"move 1 from 9 to 6",
"move 2 from 2 to 4",
"move 3 from 9 to 5",
"move 5 from 5 to 3",
"move 3 from 3 to 6",
"move 6 from 2 to 7",
"move 1 from 5 to 9",
"move 8 from 6 to 9",
"move 2 from 6 to 7",
"move 3 from 2 to 4",
"move 9 from 6 to 7",
"move 17 from 7 to 5",
"move 1 from 8 to 4",
"move 7 from 9 to 3",
"move 12 from 5 to 8",
"move 3 from 5 to 2",
"move 4 from 7 to 8",
"move 2 from 5 to 7",
"move 1 from 7 to 9",
"move 8 from 3 to 7",
"move 17 from 7 to 5",
"move 3 from 2 to 5",
"move 1 from 3 to 6",
"move 10 from 5 to 4",
"move 5 from 2 to 7",
"move 1 from 4 to 2",
"move 3 from 9 to 8",
"move 7 from 7 to 2",
"move 5 from 5 to 1",
"move 14 from 4 to 9",
"move 3 from 9 to 8",
"move 1 from 6 to 9",
"move 2 from 1 to 4",
"move 2 from 8 to 5",
"move 16 from 8 to 6",
"move 1 from 6 to 2",
"move 11 from 9 to 2",
"move 2 from 7 to 5",
"move 1 from 1 to 6",
"move 11 from 2 to 9",
"move 4 from 2 to 8",
"move 9 from 5 to 3",
"move 1 from 4 to 2",
"move 2 from 1 to 8",
"move 1 from 2 to 9",
"move 2 from 4 to 3",
"move 8 from 6 to 9",
"move 16 from 9 to 3",
"move 16 from 3 to 2",
"move 17 from 2 to 6",
"move 1 from 9 to 3",
"move 1 from 2 to 5",
"move 1 from 9 to 4",
"move 3 from 2 to 8",
"move 1 from 9 to 1",
"move 1 from 9 to 6",
"move 7 from 3 to 1",
"move 5 from 3 to 5",
"move 3 from 8 to 3",
"move 2 from 3 to 4",
"move 6 from 8 to 4",
"move 7 from 6 to 4",
"move 3 from 6 to 7",
"move 3 from 8 to 9",
"move 3 from 5 to 2",
"move 3 from 1 to 3",
"move 1 from 4 to 8",
"move 3 from 5 to 1",
"move 13 from 4 to 7",
"move 14 from 6 to 7",
"move 6 from 1 to 9",
"move 3 from 9 to 6",
"move 1 from 8 to 7",
"move 1 from 8 to 7",
"move 20 from 7 to 3",
"move 1 from 8 to 9",
"move 1 from 1 to 9",
"move 1 from 1 to 5",
"move 1 from 4 to 6",
"move 14 from 3 to 9",
"move 1 from 2 to 6",
"move 3 from 7 to 6",
"move 6 from 3 to 2",
"move 1 from 3 to 8",
"move 2 from 7 to 3",
"move 7 from 6 to 3",
"move 12 from 3 to 1",
"move 1 from 8 to 2",
"move 1 from 4 to 9",
"move 1 from 5 to 6",
"move 1 from 6 to 4",
"move 1 from 4 to 2",
"move 2 from 2 to 3",
"move 16 from 9 to 7",
"move 3 from 6 to 7",
"move 6 from 9 to 4",
"move 4 from 4 to 7",
"move 6 from 1 to 8",
"move 2 from 3 to 6",
"move 3 from 1 to 9",
"move 3 from 2 to 3",
"move 3 from 3 to 8",
"move 5 from 2 to 8",
"move 2 from 7 to 8",
"move 3 from 1 to 5",
"move 1 from 4 to 3",
"move 2 from 9 to 8",
"move 1 from 6 to 8",
"move 2 from 9 to 1",
"move 15 from 7 to 1",
"move 1 from 6 to 5",
"move 10 from 1 to 5",
"move 1 from 4 to 1",
"move 2 from 1 to 6",
"move 9 from 7 to 8",
"move 27 from 8 to 3",
"move 1 from 6 to 1",
"move 1 from 8 to 5",
"move 5 from 5 to 6",
"move 12 from 3 to 1",
"move 3 from 7 to 1",
"move 7 from 5 to 1",
"move 1 from 6 to 4",
"move 3 from 6 to 9",
"move 1 from 4 to 2",
"move 2 from 6 to 5",
"move 1 from 7 to 6",
"move 1 from 9 to 2",
"move 2 from 5 to 6",
"move 2 from 6 to 5",
"move 3 from 1 to 3",
"move 19 from 3 to 1",
"move 2 from 2 to 9",
"move 42 from 1 to 7",
"move 4 from 9 to 7",
"move 1 from 6 to 8",
"move 1 from 8 to 5",
"move 2 from 1 to 9",
"move 3 from 5 to 7",
"move 27 from 7 to 4",
"move 1 from 1 to 4",
"move 3 from 9 to 2",
"move 18 from 4 to 9",
"move 2 from 5 to 3",
"move 1 from 7 to 1",
"move 2 from 3 to 4",
"move 8 from 7 to 5",
"move 15 from 9 to 3",
"move 1 from 9 to 7",
"move 3 from 7 to 2",
"move 2 from 7 to 2",
"move 2 from 5 to 3",
"move 1 from 1 to 5",
"move 1 from 9 to 1",
"move 1 from 3 to 1",
"move 1 from 4 to 3",
"move 8 from 7 to 3",
"move 8 from 2 to 4",
"move 1 from 9 to 6",
"move 23 from 3 to 9",
"move 1 from 9 to 6",
"move 2 from 6 to 8",
"move 1 from 8 to 6",
"move 1 from 5 to 3",
"move 7 from 4 to 8",
"move 7 from 5 to 7",
"move 2 from 8 to 3",
"move 1 from 1 to 8",
"move 3 from 7 to 4",
"move 5 from 4 to 3",
"move 1 from 1 to 8",
"move 3 from 3 to 1",
"move 8 from 9 to 7",
"move 3 from 8 to 4",
"move 1 from 6 to 2",
"move 5 from 8 to 7",
"move 6 from 3 to 1",
"move 1 from 2 to 9",
"move 7 from 7 to 9",
"move 4 from 1 to 9",
"move 2 from 4 to 2",
"move 1 from 4 to 9",
"move 1 from 1 to 6",
"move 8 from 4 to 8",
"move 4 from 1 to 5",
"move 3 from 5 to 2",
"move 2 from 2 to 5",
"move 2 from 5 to 6",
"move 1 from 3 to 7",
"move 2 from 6 to 4",
"move 1 from 5 to 7",
"move 1 from 6 to 9",
"move 1 from 4 to 1",
"move 6 from 9 to 2",
"move 8 from 9 to 7",
"move 4 from 7 to 3",
"move 4 from 8 to 3",
"move 3 from 8 to 3",
"move 8 from 3 to 5",
"move 1 from 1 to 7",
"move 11 from 9 to 7",
"move 5 from 2 to 7",
"move 1 from 8 to 1",
"move 3 from 2 to 3",
"move 1 from 1 to 4",
"move 1 from 2 to 5",
"move 20 from 7 to 8",
"move 7 from 7 to 9",
"move 4 from 4 to 7",
"move 3 from 9 to 4",
"move 5 from 7 to 4",
"move 7 from 4 to 7",
"move 4 from 9 to 2",
"move 1 from 4 to 3",
"move 4 from 3 to 5",
"move 2 from 5 to 8",
"move 4 from 5 to 2",
"move 5 from 2 to 6",
"move 2 from 6 to 3",
"move 22 from 8 to 5",
"move 13 from 7 to 9",
"move 11 from 9 to 3",
"move 2 from 6 to 8",
"move 7 from 3 to 1",
"move 18 from 5 to 2",
"move 1 from 6 to 4",
"move 1 from 4 to 9",
"move 2 from 8 to 5",
"move 2 from 9 to 1",
"move 9 from 3 to 1",
"move 4 from 5 to 6",
"move 2 from 6 to 7",
"move 3 from 9 to 5",
"move 10 from 5 to 8",
"move 6 from 8 to 7",
"move 3 from 8 to 1",
"move 6 from 2 to 3",
"move 1 from 9 to 6",
"move 5 from 3 to 4",
"move 4 from 1 to 4",
"move 17 from 1 to 5",
"move 12 from 2 to 7",
"move 1 from 3 to 6",
"move 16 from 5 to 8",
"move 3 from 5 to 6",
"move 9 from 8 to 3",
"move 8 from 8 to 4",
"move 7 from 4 to 1",
"move 5 from 1 to 4",
"move 4 from 3 to 7",
"move 14 from 7 to 3",
"move 6 from 4 to 8",
"move 9 from 7 to 4",
"move 5 from 6 to 1",
"move 1 from 7 to 1",
"move 1 from 6 to 7",
"move 16 from 4 to 5",
"move 1 from 4 to 2",
"move 1 from 7 to 5",
"move 2 from 1 to 7",
"move 2 from 7 to 4",
"move 4 from 1 to 6",
"move 13 from 5 to 6",
"move 5 from 6 to 3",
"move 22 from 3 to 2",
"move 1 from 4 to 7",
"move 4 from 5 to 4",
"move 1 from 7 to 6",
"move 5 from 8 to 5",
"move 2 from 3 to 1",
"move 13 from 6 to 1",
"move 6 from 1 to 4",
"move 1 from 8 to 1",
"move 6 from 1 to 4",
"move 1 from 5 to 4",
"move 7 from 4 to 7",
"move 3 from 1 to 5",
"move 2 from 5 to 7",
"move 5 from 5 to 1",
"move 8 from 7 to 4",
"move 1 from 6 to 4",
"move 1 from 7 to 4",
"move 9 from 2 to 7",
"move 8 from 7 to 6",
"move 5 from 6 to 4",
"move 1 from 7 to 4",
"move 2 from 4 to 9",
"move 2 from 6 to 1",
"move 8 from 2 to 6",
"move 9 from 1 to 8",
"move 9 from 6 to 2",
"move 1 from 1 to 8",
"move 6 from 8 to 4",
"move 2 from 9 to 7",
"move 2 from 7 to 9",
"move 15 from 2 to 8",
"move 18 from 4 to 2",
"move 14 from 4 to 5",
"move 10 from 2 to 4",
"move 9 from 2 to 6",
"move 1 from 9 to 3",
"move 1 from 3 to 1",
"move 6 from 5 to 8",
"move 3 from 4 to 9",
"move 2 from 2 to 1",
"move 1 from 1 to 6",
"move 3 from 9 to 7",
"move 22 from 8 to 6",
"move 1 from 8 to 9",
"move 2 from 1 to 5",
"move 5 from 5 to 4",
"move 2 from 5 to 8",
"move 2 from 8 to 7",
"move 1 from 9 to 7",
"move 1 from 5 to 8",
"move 1 from 9 to 8",
"move 15 from 6 to 4",
"move 2 from 5 to 2",
"move 11 from 4 to 6",
"move 5 from 4 to 1",
"move 5 from 4 to 2",
"move 2 from 1 to 5",
"move 6 from 2 to 8",
"move 11 from 6 to 3",
"move 12 from 6 to 8",
"move 1 from 3 to 9",
"move 3 from 3 to 2",
"move 6 from 4 to 2",
"move 2 from 5 to 8",
"move 5 from 7 to 2",
"move 11 from 8 to 4",
"move 1 from 7 to 4",
"move 1 from 9 to 6",
"move 7 from 2 to 1",
"move 3 from 6 to 5",
"move 2 from 5 to 3",
"move 1 from 5 to 9",
"move 3 from 4 to 9",
"move 4 from 9 to 1",
"move 4 from 3 to 6",
"move 3 from 4 to 8",
"move 3 from 8 to 9",
"move 2 from 8 to 2",
"move 9 from 8 to 7",
"move 2 from 3 to 1",
"move 2 from 3 to 2",
"move 1 from 3 to 6",
"move 2 from 9 to 1",
"move 8 from 7 to 5",
"move 7 from 2 to 7",
"move 2 from 8 to 9",
"move 4 from 6 to 5",
"move 13 from 1 to 5",
"move 4 from 1 to 8",
"move 3 from 9 to 3",
"move 12 from 5 to 9",
"move 3 from 8 to 9",
"move 1 from 8 to 4",
"move 3 from 2 to 7",
"move 3 from 3 to 7",
"move 1 from 9 to 2",
"move 4 from 6 to 4",
"move 6 from 5 to 6",
"move 2 from 7 to 3",
"move 2 from 2 to 1",
"move 5 from 6 to 5",
"move 1 from 1 to 7",
"move 9 from 5 to 4",
"move 10 from 9 to 6",
"move 1 from 2 to 6",
"move 12 from 7 to 6",
"move 1 from 7 to 4",
"move 23 from 6 to 1",
"move 10 from 4 to 3",
"move 16 from 1 to 5",
"move 5 from 1 to 2",
"move 6 from 3 to 7",
"move 5 from 4 to 8"
]

module.exports = input;