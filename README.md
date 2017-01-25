# assignment_nosql_bulletin_board
Upvoting and downvoting comments NoSQL style

[John Popenuck](https://github.com/popenuj/assignment_nosql_bulletin_board.git)
[James Harris](https://github.com/DawnPaladin/assignment_nosql_bulletin_board.git)


POST { (document)
  id
  title
  creation date
  author
  text
}

COMMENT { (document)
  parent id
  id
  author
  creation date
  text
  votes
}

INDEX TABLE Comments and Parent Ids
