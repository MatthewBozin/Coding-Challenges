//Given an array of integers your solution should find the smallest integer.

const findSmallestInt = args => args.reduce((smallest, current) => smallest < current ? smallest : current);