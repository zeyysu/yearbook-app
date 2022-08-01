







const classes= [
    {
      "id": 1,
      "title": "Miraculous High School",
      "year": 2022,
      "studentids": [
        1,
        2,
        3,
        4,
        5
      ]
    }
  ]


  const students= [
    {
      "id": 1,
      "name": "Su Yalcin",
      "mems": [
        1,
        2,
        3
      ],
      "quote": "??????",
      "classid": 1
    },
    {
      "id": 2,
      "name": "Emily Agreste",
      "mems": [
        7,
        8,
        18,
        21,
        22,
        23,
        24,
        25
      ],
      "quote": "I am dead",
      "classid": 1
    },
    {
      "id": 3,
      "name": "Marinette Dupain-Cheng",
      "mems": [
        9,
        10,
        19,
        20,
        21,
        23,
        20,
        19,
        19
      ],
      "quote": "I am reallyyyy clumsy",
      "classid": 1
    },
    {
      "name": "Adrien Agreste",
      "quote": "whho is ladybug",
      "mems": [
        11,
        12,
        13,
        16,
        17,
        22,
        19,
        19,
        19,
        19,
        19,
        19,
        20,
        21
      ],
      "id": 4
    },
    {
      "name": "Nino",
      "quote": "come on dudeeeee",
      "classid": "1",
      "mems": [
        26,
        27
      ],
      "id": 5
    }
  ]




  const mems= [
    {
      "id": 1,
      "stid": 1,
      "body": "Who are you dare des ka",
      "author": "Anon"
    },
    {
      "id": 2,
      "stid": 1,
      "body": "Are you even in this school\nNo I am not\nokay then bye",
      "author": "Anon"
    },
    {
      "id": 3,
      "stid": 1,
      "body": "I dont know you\nNeither do I",
      "author": "Anon"
    },
    {
      "id": 7,
      "stid": 2,
      "body": "I am sad you are dead",
      "author": "Su"
    },
    {
      "id": 8,
      "stid": 2,
      "body": "Why did you have to go mother",
      "author": "Chat noir"
    },
    {
      "body": "dwjnfjwdjfhjs",
      "author": "su",
      "id": 14
    },
    {
      "body": "fvd",
      "author": "fdgfg",
      "id": 15
    },
    {
      "body": "hahhahahhahaaha",
      "author": "ahahaha",
      "stid": "2",
      "id": 18
    },
    {
      "body": "jbddbcbjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbv\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbv\nv\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb\nvgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb\nv\nv\nv\ngdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdbvgdjgsjhdghsgjdgahjdghjasgdhjgasdgjhgadhgashjdghjagfhgrfghsdmbvhsbvuchsdbcbsfhcbewhfcbfhgbksjdhfnlkdncjdbncmndsbbsdfjeljfhrwjbddbcbhsgahsfndfjbsdmbfndsbnmbsdmnbfmnsbdfnbsdnmbfnsdb",
      "author": "me",
      "stid": "4",
      "id": 19
    },
    {
      "body": "dbemdbnmbdnwmndbmnwqbdnmbqndq\n\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\n\nvdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\n\nvvdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\n\nvdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqvdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndq\nv\ndbemdbnmbdnwmndbmnwqbdnmbqndq\nv\ndbemdbnmbdnwmndbmnwqbdnmbqndq\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqv\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqv\nvv\ndbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqdbemdbnmbdnwmndbmnwqbdnmbqndqv\nvv",
      "author": "su",
      "stid": "4",
      "id": 20
    },
    {
      "body": "hot tamale hot hot tamale",
      "author": "hothot",
      "stid": "2",
      "id": 21
    },
    {
      "body": "do you like tamale cold tamale",
      "author": "tam",
      "stid": "2",
      "id": 22
    },
    {
      "body": "nooo i like hot tamale",
      "author": "tamale",
      "stid": "2",
      "id": 23
    },
    {
      "body": "hot tamale hot hot tamale hot tamale",
      "author": "hot",
      "stid": "2",
      "id": 24
    },
    {
      "body": "ccccooooooollldddd tamaleeeeeeee\nNOOOOOOOO HOT TAMALE",
      "author": "coldd",
      "stid": "2",
      "id": 25
    },
    {
      "body": "You are my best and first friend",
      "author": "Adrien",
      "stid": "5",
      "id": 26
    },
    {
      "body": "Eyvallah bro",
      "author": "ALya",
      "stid": "5",
      "id": 27
    }
  ]
module.exports = {classes, students,mems};