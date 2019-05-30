import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public results: any = 
  {
    "results": [
      {
        "id": 1009664,
        "name": "Thor",
        "description": "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.",
        "modified": "2019-02-06T18:10:24-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009664",
        "comics": {
          "available": 1684,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
              "name": "A+X (2012) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
              "name": "Age of Heroes (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46852",
              "name": "Alpha: Big Time (2013) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
              "name": "Alpha Flight (1983) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12725",
              "name": "Alpha Flight (1983) #61"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
              "name": "Alpha Flight (1983) #127"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43170",
              "name": "Amazing Spider-Man (1999) #57"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43171",
              "name": "Amazing Spider-Man (1999) #58"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6748",
              "name": "The Amazing Spider-Man (1963) #339"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/277",
              "name": "Amazing Spider-Man (1999) #500"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
              "name": "Amazing Spider-Man (1999) #538"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
              "name": "Amazing Spider-Man Annual (1964) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16890",
              "name": "Amazing Spider-Man Annual (1964) #16"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1262",
              "name": "Amazing Spider-Man Vol. 6 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/39896",
              "name": "Art of Marvel Studios TPB Slipcase (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/32769",
              "name": "Astonishing Thor (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/33652",
              "name": "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/32771",
              "name": "Astonishing Thor (2010) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/32774",
              "name": "Astonishing Thor (2010) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/32776",
              "name": "Astonishing Thor (2010) #4"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 479,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
              "name": "Age of Heroes (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
              "name": "Alpha: Big Time (2013 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
              "name": "Amazing Spider-Man Vol. 6 (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
              "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9858",
              "name": "Astonishing Thor (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
              "name": "Astonishing X-Men (2004 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
              "name": "Avengers (2018 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
              "name": "Avengers (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
              "name": "Avengers (1963 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
              "name": "Avengers (2016 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
              "name": "Avengers (1996 - 1997)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
              "name": "Avengers & the Infinity Gauntlet (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
              "name": "Avengers Academy (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
              "name": "Avengers Annual (2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
              "name": "Avengers Annual (2001)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2585,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/876",
              "name": "THOR (1998) #76",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/877",
              "name": "Interior #877",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/879",
              "name": "Interior #879",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/880",
              "name": "THOR (1998) #77",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/881",
              "name": "Interior #881",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/882",
              "name": "THOR (1998) #83",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/883",
              "name": "Interior #883",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/884",
              "name": "THOR (1998) #82",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/885",
              "name": "Interior #885",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/886",
              "name": "THOR (1998) #78",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/887",
              "name": "Interior #887",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/888",
              "name": "THOR (1998) #79",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/889",
              "name": "Interior #889",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/890",
              "name": "THOR (1998) #80",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/891",
              "name": "Interior #891",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
              "name": "THOR (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/893",
              "name": "Interior #893",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/894",
              "name": "THOR (1998) #84",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/895",
              "name": "AVENGERS DISASSEMBLED TIE-IN! “RAGNAROK” PART 4 (OF 6) What makes a god? Is it birthright, is it happenstance, or is it in the m",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/896",
              "name": "THOR (1998) #85",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 24,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009664/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/235",
              "name": "Blood and Thunder"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
              "name": "Evolutionary War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
              "name": "Mutant Massacre"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
              "name": "Secret Wars"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
              "name": "Secret Wars II"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/1009664/thor/featured?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1010338,
        "name": "Captain Marvel (Carol Danvers)",
        "description": "",
        "modified": "2019-02-06T18:09:05-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/80/5269608c1be7a",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010338",
        "comics": {
          "available": 462,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010338/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/58636",
              "name": "Marvel New Year's Eve Special Infinite Comic (2017) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43505",
              "name": "A+X (2012) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56017",
              "name": "A-Force (2016) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56018",
              "name": "A-Force (2016) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56019",
              "name": "A-Force (2016) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56020",
              "name": "A-Force (2016) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56021",
              "name": "A-Force (2016) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
              "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
              "name": "Adam: Legend of the Blue Marvel (2008) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23733",
              "name": "Adam: Legend of the Blue Marvel (2008) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24222",
              "name": "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37277",
              "name": "Alias (2001) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37280",
              "name": "Alias (2001) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
              "name": "Alias Omnibus (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60276",
              "name": "All-New, All-Different Avengers Annual (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12638",
              "name": "Alpha Flight (1983) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4277",
              "name": "Amazing Spider-Man (1999) #533"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/32217",
              "name": "Amazing Spider-Man (1999) #653"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35521",
              "name": "Amazing Spider-Man (1999) #654"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/39595",
              "name": "Amazing Spider-Man (1999) #654 (2nd Printing Variant)"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 167,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010338/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20606",
              "name": "A-Force (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
              "name": "Adam: Legend of the Blue Marvel (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
              "name": "Adam: Legend of the Blue Marvel (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6807",
              "name": "Agents of Atlas (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
              "name": "Alias (2001 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
              "name": "Alias Omnibus (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22190",
              "name": "All-New, All-Different Avengers Annual (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
              "name": "Annihilators: Earthfall (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
              "name": "Avengers (2018 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
              "name": "Avengers (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9859",
              "name": "Avengers & the Infinity Gauntlet (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
              "name": "Avengers Annual (2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
              "name": "Avengers Assemble (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
              "name": "Avengers Assemble (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
              "name": "Avengers Assemble Vol. 2 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
              "name": "Avengers Assemble Vol. 3 (2006)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 557,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010338/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1191",
              "name": "Amazing Spider-Man (1999) #533",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2359",
              "name": "1 of",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3411",
              "name": "1 of 4 - Nimrod",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3479",
              "name": "2 of 2 - Spider-Woman",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4125",
              "name": "3 of 3 - Titannus War",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5559",
              "name": "1 of 3  - Best of the Best",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5561",
              "name": "2 of 3  - Best of the Best",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5563",
              "name": "3 of 3  - Best of the Best",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5565",
              "name": "1 of 2 -",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5567",
              "name": "2 of 2 -",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5569",
              "name": "1 of 3 - Civil War",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5571",
              "name": "2 of 3 - Civil War",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5573",
              "name": "3 of 3 - Civil War",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5575",
              "name": "1 of 2 - Rogue",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5577",
              "name": "2 of 2 - Rogue",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5579",
              "name": "1 of 2 - Initiative",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5903",
              "name": "7 of 7 - 7XLS",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5905",
              "name": "Cover #5905",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/5907",
              "name": "Cover #5907",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/7782",
              "name": "2 of 2 - Initiative",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 16,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010338/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
              "name": "Days of Future Present"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
              "name": "Marvel NOW!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/337",
              "name": "Monsters Unleashed"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
              "name": "Monsters Unleashed"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
              "name": "Spider-Island"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/277",
              "name": "World War Hulk"
            }
          ],
          "returned": 16
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1010338/captain_marvel_carol_danvers?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Ms._Marvel_(Carol_Danvers)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010338/captain_marvel_carol_danvers?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009262,
        "name": "Daredevil",
        "description": "Abandoned by his mother, Matt Murdock was raised by his father, boxer \"Battling Jack\" Murdock, in Hell's Kitchen. Realizing that rules were needed to prevent people from behaving badly, young Matt decided to study law; however, when he saved a man from an oncoming truck, it spilled a radioactive cargo that rendered Matt blind while enhancing his remaining senses. Under the harsh tutelage of blind martial arts master Stick, Matt mastered his heightened senses and became a formidable fighter.",
        "modified": "2019-02-06T18:07:39-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/50/50febb79985ee",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009262",
        "comics": {
          "available": 1122,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009262/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29317",
              "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29318",
              "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37257",
              "name": "Alias (2001) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
              "name": "Alias Omnibus (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
              "name": "Alpha Flight (1983) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
              "name": "Alpha Flight (1983) #127"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37894",
              "name": "Amazing Spider-Man (1999) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6549",
              "name": "The Amazing Spider-Man (1963) #16"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6811",
              "name": "The Amazing Spider-Man (1963) #396"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6848",
              "name": "The Amazing Spider-Man (1963) #429"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6858",
              "name": "The Amazing Spider-Man (1963) #438"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5808",
              "name": "Amazing Spider-Man (1999) #538"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21504",
              "name": "Amazing Spider-Man (1999) #566"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21702",
              "name": "Amazing Spider-Man (1999) #567"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23567",
              "name": "Amazing Spider-Man (1999) #587"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24407",
              "name": "Amazing Spider-Man (1999) #600"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29303",
              "name": "Amazing Spider-Man (1999) #600 (2ND PRINTING VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35491",
              "name": "Amazing Spider-Man (1999) #677"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16904",
              "name": "Amazing Spider-Man Annual (1964) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16889",
              "name": "Amazing Spider-Man Annual (1964) #15"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 279,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009262/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9994",
              "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9995",
              "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
              "name": "Alias (2001 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
              "name": "Alias Omnibus (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6604",
              "name": "Amazing Spider-Man: Extra! (2008 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
              "name": "Astonishing Tales (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
              "name": "Avengers (1963 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
              "name": "Avengers Annual (1967 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
              "name": "Avengers Assemble (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
              "name": "Avengers Assemble Vol. 2 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
              "name": "Avengers Assemble Vol. 4 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16230",
              "name": "Avengers Vs. X-Men: Versus (2011 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14246",
              "name": "Avenging Spider-Man (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1503",
              "name": "Best of the Fantastic Four Vol. 1 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/819",
              "name": "Black Panther 2099 (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15691",
              "name": "Black Panther: The Man Without Fear (2010 - 2011)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 1805,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009262/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/533",
              "name": "Interior #533",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/534",
              "name": "Interior #534",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/535",
              "name": "Interior #535",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/537",
              "name": "Interior #537",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/538",
              "name": "Interior #538",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/539",
              "name": "Interior #539",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/547",
              "name": "Interior #547",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1044",
              "name": "2 of 4 - Golden Age",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1045",
              "name": "2 of 4 - Golden Age",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1056",
              "name": "Cover #1056",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1057",
              "name": "Interior #1057",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1058",
              "name": "Cover #1058",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1059",
              "name": "Interior #1059",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1060",
              "name": "Cover #1060",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1061",
              "name": "Interior #1061",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1062",
              "name": "Cover #1062",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1063",
              "name": "Interior #1063",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1064",
              "name": "Cover #1064",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1065",
              "name": "Interior #1065",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1066",
              "name": "Cover #1066",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 15,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009262/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
              "name": "Mutant Massacre"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
              "name": "Other - Evolve or Die"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
              "name": "Secret Wars II"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/59",
              "name": "Shadowland"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
              "name": "Siege"
            }
          ],
          "returned": 15
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009262/daredevil?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Daredevil_(Matthew_Murdock)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009262/daredevil?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009610,
        "name": "Spider-Man",
        "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
        "modified": "2019-02-06T18:06:19-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
        "comics": {
          "available": 3582,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62304",
              "name": "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
              "name": "A Year of Marvels (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/57926",
              "name": "A Year of Marvels: April Infinite Comic (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
              "name": "A+X (2012) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30885",
              "name": "Age of Heroes (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
              "name": "Age of Heroes (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66661",
              "name": "Agents of Atlas: The Complete Collection Vol. 1 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37257",
              "name": "Alias (2001) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37262",
              "name": "Alias (2001) #15"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
              "name": "Alias Omnibus (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46848",
              "name": "Alpha: Big Time (2013) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
              "name": "Alpha Flight (1983) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
              "name": "Alpha Flight (1983) #127"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46847",
              "name": "Alpha: Big Time (2013) #0.1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16926",
              "name": "Amazing Fantasy (1962) #15"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3105",
              "name": "Amazing Fantasy (2004) #15"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/41139",
              "name": "Amazing Fantasy 15: Spider-Man! (2011) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16214",
              "name": "AMAZING FANTASY OMNIBUS HC (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5286",
              "name": "Amazing Spider-Girl (2006)"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 892,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
              "name": "A Year of Marvels (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21110",
              "name": "A Year of Marvels: April Infinite Comic (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
              "name": "Age of Heroes (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
              "name": "Age of Heroes (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
              "name": "Age of Ultron (2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
              "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
              "name": "Alias (2001 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
              "name": "Alias Omnibus (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
              "name": "Alpha: Big Time (2013 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/769",
              "name": "Amazing Fantasy (2004 - 2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2987",
              "name": "Amazing Fantasy (1962)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15280",
              "name": "Amazing Fantasy 15: Spider-Man! (2011 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2707",
              "name": "AMAZING FANTASY OMNIBUS HC (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1126",
              "name": "Amazing Spider-Girl (2006 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2234",
              "name": "AMAZING SPIDER-GIRL VOL. 1: WHATEVER HAPPENED TO THE DAUGHTER OF SPIDER-MAN TPB (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3101",
              "name": "AMAZING SPIDER-GIRL VOL. 2: COMES THE CARNAGE! TPB (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 5522,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/483",
              "name": "Interior #483",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/486",
              "name": "Cover #486",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/487",
              "name": "Interior #487",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/498",
              "name": "SENSATIONAL SPIDER-MAN (2006) #23",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/499",
              "name": "Interior #499",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/599",
              "name": "Interior #599",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/805",
              "name": "Interior #805",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/824",
              "name": "Cover #824",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/838",
              "name": "3 of 3 - Family Business",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/842",
              "name": "1 of 1 -  Secret of the Spider Shop",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/867",
              "name": "Interior #867",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
              "name": "Fantastic Four (1998) #512",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
              "name": "Interior #913",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
              "name": "Fantastic Four (1998) #513",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
              "name": "Interior #917",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
              "name": "Amazing Spider-Man (1999) #500",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1019",
              "name": "Interior #1019",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1020",
              "name": "Amazing Spider-Man (1999) #501",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1021",
              "name": "Interior #1021",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1022",
              "name": "Amazing Spider-Man (1999) #502",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 35,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
              "name": "Age of Ultron"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
              "name": "Days of Future Present"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/332",
              "name": "Dead No More: The Clone Conspiracy"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
              "name": "Enemy of the State"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
              "name": "Evolutionary War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/258",
              "name": "Kraven's Last Hunt"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/151",
              "name": "Maximum Carnage"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
              "name": "Monsters Unleashed"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009165,
        "name": "Avengers",
        "description": "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
        "modified": "2019-02-06T18:03:00-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
        "comics": {
          "available": 1758,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/42539",
              "name": "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37405",
              "name": "Age of Ultron (2013) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37406",
              "name": "Age of Ultron (2013) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37407",
              "name": "Age of Ultron (2013) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45904",
              "name": "Age of Ultron (2013) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45905",
              "name": "Age of Ultron (2013) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45906",
              "name": "Age of Ultron (2013) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45907",
              "name": "Age of Ultron (2013) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/45908",
              "name": "Age of Ultron (2013) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
              "name": "Age of X: Universe (2011) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
              "name": "Age of X: Universe (2011) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37278",
              "name": "Alias (2001) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37255",
              "name": "Alias Omnibus (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43473",
              "name": "All-New X-Men (2012) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43475",
              "name": "All-New X-Men (2012) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43476",
              "name": "All-New X-Men (2012) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43477",
              "name": "All-New X-Men (2012) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43479",
              "name": "All-New X-Men (2012) #14"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55351",
              "name": "All-New, All-Different Avengers (2015) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/59596",
              "name": "Avengers (2016) #1.1"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 494,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
              "name": "Age of Apocalypse (2011 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
              "name": "Age of Ultron (2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
              "name": "Age of X: Universe (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
              "name": "Alias (2001 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
              "name": "Alias Omnibus (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
              "name": "All-New X-Men (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
              "name": "All-New, All-Different Avengers (2015 - 2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22374",
              "name": "All-New, All-Different Avengers (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22190",
              "name": "All-New, All-Different Avengers Annual (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/719",
              "name": "Alpha Flight (2004 - 2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24403",
              "name": "Amazing Spider-Man Epic Collection: Spider-Man No More (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/5376",
              "name": "Amazing Spider-Man Family (2008 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
              "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16312",
              "name": "Amazing Spider-Man: Ends of the Earth (2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
              "name": "Astonishing X-Men (2004 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10030",
              "name": "Atlantis Attacks (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10031",
              "name": "Atlantis Attacks (DM Only) (2011)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 2556,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/490",
              "name": "Interior #490",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/542",
              "name": "Interior #542",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/572",
              "name": "Interior #572",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/574",
              "name": "Interior #574",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/575",
              "name": "Interior #575",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/577",
              "name": "Interior #577",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/579",
              "name": "Interior #579",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/580",
              "name": "Interior #580",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/749",
              "name": "1 of 4 - Season of the Witch",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/892",
              "name": "THOR (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
              "name": "Avengers (1998) #80",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1025",
              "name": "Interior #1025",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
              "name": "Avengers (1998) #81",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1027",
              "name": "Interior #1027",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1029",
              "name": "Interior #1029",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1031",
              "name": "Interior #1031",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1039",
              "name": "Interior #1039",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1041",
              "name": "Avengers (1998) #502",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1043",
              "name": "Interior #1043",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1054",
              "name": "Avengers (1998) #72",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 34,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009165/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
              "name": "Age of Ultron"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
              "name": "Crossing"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
              "name": "Evolutionary War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
              "name": "Infinity War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
              "name": "Inhumanity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
              "name": "Monsters Unleashed"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Avengers?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009187,
        "name": "Black Panther",
        "description": "",
        "modified": "2018-06-19T16:39:46-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/60/5261a80a67e7d",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009187",
        "comics": {
          "available": 607,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009187/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43498",
              "name": "A+X (2012) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30885",
              "name": "Age of Heroes (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16889",
              "name": "Amazing Spider-Man Annual (1964) #15"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16900",
              "name": "Amazing Spider-Man Annual (1964) #25"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43221",
              "name": "Astonishing X-Men (2004) #51 (Create Your Own Wedding Variant)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67002",
              "name": "Avengers (2018) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17490",
              "name": "Avengers (1998) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
              "name": "Avengers (1998) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67311",
              "name": "Avengers (2018) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
              "name": "Avengers (1998) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
              "name": "Avengers (1998) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67763",
              "name": "Avengers (2018) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67769",
              "name": "Avengers (2018) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17500",
              "name": "Avengers (1998) #19"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17502",
              "name": "Avengers (1998) #20"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17503",
              "name": "Avengers (1998) #21"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17504",
              "name": "Avengers (1998) #22"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17505",
              "name": "Avengers (1998) #23"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17532",
              "name": "Avengers (1998) #48"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7301",
              "name": "Avengers (1963) #51"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 203,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009187/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
              "name": "Age of Heroes (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
              "name": "Astonishing X-Men (2004 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24229",
              "name": "Avengers (2018 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
              "name": "Avengers (1963 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
              "name": "Avengers Annual (1967 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
              "name": "Avengers Assemble (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
              "name": "Avengers Assemble Vol. 3 (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
              "name": "Avengers Assemble Vol. 4 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26625",
              "name": "Avengers Assemble: Living Legends (2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2384",
              "name": "Avengers Classic (2007 - 2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3971",
              "name": "Avengers Fairy Tales (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
              "name": "Avengers Forever (1998 - 2001)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9863",
              "name": "Avengers Origins: Vision (2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/158",
              "name": "Avengers Vol. 1: World Trust (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/227",
              "name": "Avengers Vol. 2: Red Zone (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/271",
              "name": "Avengers Vol. II: Red Zone (2003)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 828,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009187/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/650",
              "name": "2 of 2- Black Panther crossover",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3812",
              "name": "1 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3813",
              "name": "1 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3814",
              "name": "2 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3815",
              "name": "2 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3816",
              "name": "3 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3817",
              "name": "3 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3818",
              "name": "4 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3819",
              "name": "4 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3820",
              "name": "5 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3821",
              "name": "5 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3822",
              "name": "6 of 6- Who is the Black Panther",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3823",
              "name": "6 of 6- Who is the Black Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3825",
              "name": "1 of 1- House of M",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3826",
              "name": "1 of 2 - (X-Men crossover)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3827",
              "name": "1 of 2 - (X-Men crossover)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3828",
              "name": "2 of 2 - X-Men crossover",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3829",
              "name": "2 of 2 - X-Men crossover",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3831",
              "name": "1 of 4 - Bride Prelude",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3833",
              "name": "2 of 4 - Bride Prelude",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 17,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009187/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
              "name": "Infinity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
              "name": "Inhumanity"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/311",
              "name": "Marvel NOW!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/319",
              "name": "Original Sin"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/266",
              "name": "Other - Evolve or Die"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
              "name": "Spider-Island"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/277",
              "name": "World War Hulk"
            }
          ],
          "returned": 17
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009187/black_panther?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Black_Panther_(T%27Challa)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009187/black_panther?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1011244,
        "name": "Mr. Negative",
        "description": "",
        "modified": "2018-04-04T20:15:35-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/70/4c002efc322e3",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011244",
        "comics": {
          "available": 25,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011244/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17338",
              "name": "Amazing Spider-Man (1999) #546"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17340",
              "name": "Amazing Spider-Man (1999) #547"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17341",
              "name": "Amazing Spider-Man (1999) #548"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22263",
              "name": "Amazing Spider-Man (1999) #575"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22466",
              "name": "Amazing Spider-Man (1999) #576"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23928",
              "name": "Amazing Spider-Man (1999) #590"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24419",
              "name": "Amazing Spider-Man (1999) #612"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28710",
              "name": "Amazing Spider-Man (1999) #612 (VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29555",
              "name": "Amazing Spider-Man (1999) #612 (GRANOV 50/50 COVER)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28225",
              "name": "Amazing Spider-Man (1999) #620"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/31556",
              "name": "Amazing Spider-Man (1999) #620 (DEADPOOL VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28226",
              "name": "Amazing Spider-Man (1999) #621"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30317",
              "name": "Amazing Spider-Man (1999) #642"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35501",
              "name": "Amazing Spider-Man (1999) #663"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35515",
              "name": "Amazing Spider-Man (1999) #664"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23180",
              "name": "Amazing Spider-Man: Extra! (2008) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/40400",
              "name": "Avengers (2010) #30"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71822",
              "name": "Cloak and Dagger: Marvel Digital Original - Negative Exposure (2018) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71823",
              "name": "Cloak and Dagger: Marvel Digital Original - Negative Exposure (2018) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24844",
              "name": "Dark Reign: Mister Negative (2009) #1"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011244/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6604",
              "name": "Amazing Spider-Man: Extra! (2008 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
              "name": "Avengers (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26170",
              "name": "Cloak and Dagger: Marvel Digital Original - Negative Exposure (2018 - 2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7691",
              "name": "Dark Reign: Mister Negative (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14107",
              "name": "Spider-Island: Cloak & Dagger (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/12305",
              "name": "X-Men: To Serve and Protect (2010 - 2011)"
            }
          ],
          "returned": 7
        },
        "stories": {
          "available": 30,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011244/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/36347",
              "name": "For Pete\\'s Sake 1 of 3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/36351",
              "name": "For Pete\\'s Sake 2 of 3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/36353",
              "name": "For Pete\\'s Sake 3 of 3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49031",
              "name": "Interior #49031",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49809",
              "name": "Amazing Spider-Man (1999) #576 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/51400",
              "name": "Amazing Spider-Man: Extra! (2009) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/51401",
              "name": "1 of 1",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53067",
              "name": "Amazing Spider-Man (1999) #590 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53073",
              "name": "Amazing Spider-Man (1999) #590",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54196",
              "name": "Amazing Spider-Man (1999) #612 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54917",
              "name": "DARK REIGN: MISTER NEGATIVE (2009) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54919",
              "name": "DARK REIGN: MISTER NEGATIVE (2009) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/54921",
              "name": "DARK REIGN: MISTER NEGATIVE (2009) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/61673",
              "name": "Amazing Spider-Man (1999) #620 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/61674",
              "name": "Amazing Spider-Man (1999) #621",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/61675",
              "name": "Amazing Spider-Man (1999) #621 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/62616",
              "name": "Amazing Spider-Man (1999) #612, Variant - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/64262",
              "name": "Amazing Spider-Man (1999) #612, Granov 50/50 Variant - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/69461",
              "name": "Amazing Spider-Man (1999) #642 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/71772",
              "name": "Amazing Spider-Man (1999) #620, Deadpool Variant - Int",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011244/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
              "name": "Spider-Island"
            }
          ],
          "returned": 2
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1011244/mr_negative?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Mister%20Negative?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1011244/mr_negative?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1011336,
        "name": "New Mutants",
        "description": "",
        "modified": "2017-10-13T10:18:07-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/e0/53ea47c1d41a6",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011336",
        "comics": {
          "available": 242,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011336/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23645",
              "name": "Astonishing Tales (2009) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/30346",
              "name": "Cable (2008) #24"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66188",
              "name": "Cable (2017) #154"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/20946",
              "name": "Cable Classic Vol. 1 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66190",
              "name": "Color Your Own X-Men: The New Mutants (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/39443",
              "name": "ESSENTIAL X-MEN VOL. 4 TPB (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/42400",
              "name": "Exiled (2011) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64879",
              "name": "Fallen Angels (1987) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64878",
              "name": "Fallen Angels (1987) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64877",
              "name": "Fallen Angels (1987) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64875",
              "name": "Fallen Angels (1987) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64874",
              "name": "Fallen Angels (1987) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64873",
              "name": "Fallen Angels (1987) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64872",
              "name": "Fallen Angels (1987) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27443",
              "name": "Golden Age Marvel Comics Omnibus Vol. 1 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/40566",
              "name": "Journey Into Mystery (2011) #637"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/40552",
              "name": "Journey Into Mystery (2011) #638"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62185",
              "name": "Loki: Journey into Mystery by Kieron Gillen (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71517",
              "name": "Marvel Age Annual (1985) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/19821",
              "name": "Marvel Fanfare (1982) #45"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 42,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011336/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
              "name": "Astonishing Tales (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/4002",
              "name": "Cable (2008 - 2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22386",
              "name": "Cable (2017 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/4059",
              "name": "Cable Classic Vol. 1 (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24000",
              "name": "Color Your Own X-Men: The New Mutants (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14398",
              "name": "ESSENTIAL X-MEN VOL. 4 TPB (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16139",
              "name": "Exiled (2011 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23621",
              "name": "Fallen Angels (1987)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8765",
              "name": "Golden Age Marvel Comics Omnibus Vol. 1 (2009 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14764",
              "name": "Journey Into Mystery (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22809",
              "name": "Loki: Journey into Mystery by Kieron Gillen (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26065",
              "name": "Marvel Age Annual (1985 - 1988)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
              "name": "Marvel Fanfare (1982 - 1992)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8770",
              "name": "Marvel Masterworks: The Inhumans Vol. 1 (2009 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8755",
              "name": "Marvel Masterworks: The Inhumans Vol.1 (2009 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8771",
              "name": "Marvel Super Hero Squad (2009 - 2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22492",
              "name": "Marvel Team-Up Annual (1976 - 1978)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1595",
              "name": "Marvel Visionaries: Chris Claremont (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
              "name": "New Mutants (1983 - 1991)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/563",
              "name": "New Mutants (2003 - 2004)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 418,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011336/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/596",
              "name": "New Mutants (2003) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/597",
              "name": "Interior #597",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1296",
              "name": "New Mutants (2003) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1297",
              "name": "Interior #1297",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1596",
              "name": "New Mutants (2003) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1597",
              "name": "Interior #1597",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1888",
              "name": "New Mutants (2003) #9",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1889",
              "name": "Interior #1889",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1901",
              "name": "New Mutants (2003) #12",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1902",
              "name": "Interior #1902",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1903",
              "name": "New Mutants (2003) #13",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1904",
              "name": "Interior #1904",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2079",
              "name": "New Mutants (2003) #7",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2080",
              "name": "Interior #2080",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2155",
              "name": "New Mutants (2003) #11",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2156",
              "name": "Interior #2156",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2533",
              "name": "New Mutants (2003) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2534",
              "name": "Interior #2534",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3364",
              "name": "Interior #3364",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3365",
              "name": "New X-Men (2004) #5",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 16,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011336/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
              "name": "Days of Future Present"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
              "name": "Evolutionary War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
              "name": "Fall of the Mutants"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
              "name": "Kings of Pain"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
              "name": "Mutant Massacre"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
              "name": "Secret Wars"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
              "name": "Secret Wars II"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
              "name": "Siege"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
              "name": "X-Men: Regenesis"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/279",
              "name": "X-Men: Second Coming"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/280",
              "name": "X-Tinction Agenda"
            }
          ],
          "returned": 16
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1011336/new_mutants?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/New_Mutants?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1011336/new_mutants?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1010694,
        "name": "Speedball (Robert Baldwin)",
        "description": "",
        "modified": "2017-08-24T17:00:17-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/7/30/4d52f6a668e76",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010694",
        "comics": {
          "available": 18,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010694/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29214",
              "name": "Avengers Academy (2010) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66355",
              "name": "Avengers Academy: The Complete Collection Vol. 1 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27546",
              "name": "Avengers: The Initiative (2007) #29"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38498",
              "name": "Fear Itself: The Home Front (2010) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38495",
              "name": "Fear Itself: The Home Front (2010) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38494",
              "name": "Fear Itself: The Home Front (2010) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38496",
              "name": "Fear Itself: The Home Front (2010) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38493",
              "name": "Fear Itself: The Home Front (2010) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/9554",
              "name": "Iron Man (1968) #303"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/65858",
              "name": "Namor: The Sub-Mariner (1990) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2072",
              "name": "New Warriors (2005) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2180",
              "name": "New Warriors (2005) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2300",
              "name": "New Warriors (2005) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2408",
              "name": "New Warriors (2005) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3000",
              "name": "New Warriors (2005) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3119",
              "name": "New Warriors (2005) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/69159",
              "name": "New Warriors (1990) #27"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/75610",
              "name": "Speedball: The Masked Marvel (Trade Paperback)"
            }
          ],
          "returned": 18
        },
        "series": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010694/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
              "name": "Avengers Academy (2010 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24040",
              "name": "Avengers Academy: The Complete Collection Vol. 1 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13881",
              "name": "Fear Itself: The Home Front (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
              "name": "Iron Man (1968 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23530",
              "name": "Namor: The Sub-Mariner (1990 - 1995)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16341",
              "name": "New Warriors (1990 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/839",
              "name": "New Warriors (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27189",
              "name": "Speedball: The Masked Marvel (2019)"
            }
          ],
          "returned": 9
        },
        "stories": {
          "available": 26,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010694/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4314",
              "name": "New Warriors (2005) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4315",
              "name": "1 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4316",
              "name": "New Warriors (2005) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4317",
              "name": "2 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4318",
              "name": "New Warriors (2005) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4319",
              "name": "3 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4320",
              "name": "New Warriors (2005) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4321",
              "name": "4 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4322",
              "name": "New Warriors (2005) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4323",
              "name": "5 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4324",
              "name": "New Warriors (2005) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4325",
              "name": "6 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19587",
              "name": "Kids These Days",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/60369",
              "name": "Avengers: The Initiative (2007) #29",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/60370",
              "name": "Avengers: The Initiative (2007) #29 - Int",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/63619",
              "name": "Avengers Academy (2010) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66635",
              "name": "Iron Man (1968) #303",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/90220",
              "name": "FEAR ITSELF: THE HOME FRONT (2010) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/90948",
              "name": "FEAR ITSELF: THE HOME FRONT #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/92960",
              "name": "FEAR ITSELF: THE HOME FRONT (2010) #5",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010694/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            }
          ],
          "returned": 1
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1010694/speedball_robert_baldwin?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Speedball?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010694/speedball_robert_baldwin?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1014063,
        "name": "Night Thrasher (Dwayne Taylor)",
        "description": "",
        "modified": "2017-08-24T16:58:59-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/4ce5ab3d8bf66",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014063",
        "comics": {
          "available": 14,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014063/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6765",
              "name": "The Amazing Spider-Man (1963) #354"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6766",
              "name": "The Amazing Spider-Man (1963) #355"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6767",
              "name": "The Amazing Spider-Man (1963) #356"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6768",
              "name": "The Amazing Spider-Man (1963) #357"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6769",
              "name": "The Amazing Spider-Man (1963) #358"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/9553",
              "name": "Iron Man (1968) #302"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/9554",
              "name": "Iron Man (1968) #303"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/9555",
              "name": "Iron Man (1968) #304"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22914",
              "name": "New Warriors (2007) #19"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23114",
              "name": "New Warriors (2007) #20"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/59959",
              "name": "Night Thrasher: Four Control (1992) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71984",
              "name": "Night Thrasher: Four Control (1992) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71985",
              "name": "Night Thrasher: Four Control (1992) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/71986",
              "name": "Night Thrasher: Four Control (1992) #4"
            }
          ],
          "returned": 14
        },
        "series": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014063/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
              "name": "Iron Man (1968 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2409",
              "name": "New Warriors (2007 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21938",
              "name": "Night Thrasher: Four Control (1992 - 1993)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
              "name": "The Amazing Spider-Man (1963 - 1998)"
            }
          ],
          "returned": 4
        },
        "stories": {
          "available": 20,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014063/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14126",
              "name": "Amazing Spider-Man (1963) #355",
              "type": ""
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14129",
              "name": "Amazing Spider-Man (1963) #357",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14131",
              "name": "Amazing Spider-Man (1963) #358",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19586",
              "name": "Oil and Gold",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19587",
              "name": "Kids These Days",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19588",
              "name": "The Sound of Thunder",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/50873",
              "name": "New Warriors (2007) #19",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/50874",
              "name": "4 of 5 Future Shock",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/51252",
              "name": "New Warriors (2007) #20",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/51253",
              "name": "5 of 5 Future Shock",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66246",
              "name": "Amazing Spider-Man (1963) #354",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66247",
              "name": "Amazing Spider-Man (1963) #355",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66248",
              "name": "Amazing Spider-Man (1963) #356",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66634",
              "name": "Iron Man (1968) #302",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66635",
              "name": "Iron Man (1968) #303",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/66636",
              "name": "Iron Man (1968) #304",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/159965",
              "name": "cover from Night Thrasher: Four Control (1992) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/159967",
              "name": "cover from Night Thrasher: Four Control (1992) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/159969",
              "name": "cover from Night Thrasher: Four Control (1992) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/166116",
              "name": "cover to Night Thrasher: Four Control (1992) #1",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014063/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1014063/night_thrasher_dwayne_taylor?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Night_Thrasher_(Dwayne_Taylor)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1014063/night_thrasher_dwayne_taylor?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1010684,
        "name": "Night Thrasher",
        "description": "",
        "modified": "2017-08-24T16:58:26-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/e0/52695ac9de43e",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010684",
        "comics": {
          "available": 37,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010684/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17494",
              "name": "Avengers (1998) #13"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1795",
              "name": "Avengers Assemble Vol. 2 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27546",
              "name": "Avengers: The Initiative (2007) #29"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/59606",
              "name": "Civil War II: Choosing Sides (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/15881",
              "name": "New Warriors (2007) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2072",
              "name": "New Warriors (2005) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/15990",
              "name": "New Warriors (2007) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2180",
              "name": "New Warriors (2005) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16175",
              "name": "New Warriors (2007) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2300",
              "name": "New Warriors (2005) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16571",
              "name": "New Warriors (2007) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2408",
              "name": "New Warriors (2005) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16572",
              "name": "New Warriors (2007) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3000",
              "name": "New Warriors (2005) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17270",
              "name": "New Warriors (2007) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3119",
              "name": "New Warriors (2005) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17404",
              "name": "New Warriors (2007) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17644",
              "name": "New Warriors (2007) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/20685",
              "name": "New Warriors (2007) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/20884",
              "name": "New Warriors (2007) #10"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 10,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010684/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
              "name": "Avengers (1998 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
              "name": "Avengers Assemble Vol. 2 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
              "name": "Avengers: The Initiative (2007 - 2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21692",
              "name": "Civil War II: Choosing Sides (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16341",
              "name": "New Warriors (1990 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2409",
              "name": "New Warriors (2007 - 2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/839",
              "name": "New Warriors (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
              "name": "Thor (1966 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
              "name": "X-Factor Annual (1986 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
              "name": "X-Force (1991 - 2004)"
            }
          ],
          "returned": 10
        },
        "stories": {
          "available": 61,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010684/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4314",
              "name": "New Warriors (2005) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4315",
              "name": "1 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4316",
              "name": "New Warriors (2005) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4317",
              "name": "2 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4318",
              "name": "New Warriors (2005) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4319",
              "name": "3 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4320",
              "name": "New Warriors (2005) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4321",
              "name": "4 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4322",
              "name": "New Warriors (2005) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4323",
              "name": "5 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4324",
              "name": "New Warriors (2005) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4325",
              "name": "6 of 6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17137",
              "name": "Thor (1966) #411",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17140",
              "name": "Thor (1966) #412",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/32432",
              "name": "New Warriors (2007) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/32433",
              "name": "1 of 4; THE INITIATIVE BANNER",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/32653",
              "name": "New Warriors (2007) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/32654",
              "name": "2 of 5; THE INITIATIVE BANNER; Annihilation Conquest Insert",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/33041",
              "name": "New Warriors (2007) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/33042",
              "name": "3 of 5; THE INITIATIVE BANNER",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010684/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
              "name": "Kings of Pain"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 4
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1010684/night_thrasher?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Night_Thrasher?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1010684/night_thrasher?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1011960,
        "name": "Tippy Toe",
        "description": "After the senseless murder of Squirrel Girl’s first partner Monkey Joe, Tippy Toe remained by Squirrel Girl’s side and became her new partner.",
        "modified": "2017-08-24T16:56:33-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011960",
        "comics": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011960/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
              "name": "A Year of Marvels (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/57931",
              "name": "A YEAR OF MARVELS: SEPTEMBER INFINITE COMIC (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60484",
              "name": "The Unbeatable Squirrel Girl Vol. 2 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61092",
              "name": "The Unbeatable Squirrel Girl (2015) #26"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/59752",
              "name": "The Unbeatable Squirrel Girl Beats Up the Marvel Universe (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62239",
              "name": "The Unbeatable Squirrel Girl Vol. 6: Who Run The World? Squirrels (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67567",
              "name": "The Unbeatable Squirrel Girl Vol. 8: My Best Friend's Squirrel (Trade Paperback)"
            }
          ],
          "returned": 7
        },
        "series": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011960/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
              "name": "A Year of Marvels (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21115",
              "name": "A YEAR OF MARVELS: SEPTEMBER INFINITE COMIC (2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20620",
              "name": "The Unbeatable Squirrel Girl (2015 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21745",
              "name": "The Unbeatable Squirrel Girl Beats Up the Marvel Universe (2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22359",
              "name": "The Unbeatable Squirrel Girl Vol. 2 (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22862",
              "name": "The Unbeatable Squirrel Girl Vol. 6: Who Run The World? Squirrels (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24358",
              "name": "The Unbeatable Squirrel Girl Vol. 8: My Best Friend's Squirrel (2018)"
            }
          ],
          "returned": 7
        },
        "stories": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011960/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/126565",
              "name": "story from Junior Editor: TBD Infinite Comic H (2016) #1",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/130019",
              "name": "story from The Unbeatable Squirrel Girl Beats Up the Marvel Universe (2016)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/130799",
              "name": "cover from A Year of Marvels (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131437",
              "name": "cover from The Unbeatable Squirrel Girl (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/132637",
              "name": "cover from The Unbeatable Squirrel Girl (2015) #26",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/134863",
              "name": "cover from The Unbeatable Squirrel Girl (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/146320",
              "name": "cover from THE UNBEATABLE SQUIRREL GIRL VOL. 8: MY BEST FRIEND'S SQUIRREL TPB (2018) #8",
              "type": "cover"
            }
          ],
          "returned": 7
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011960/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1011960/tippy_toe?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Tippy_Toe?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1011960/tippy_toe?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1014528,
        "name": "Quake (Daisy Johnson)",
        "description": "",
        "modified": "2017-08-24T16:53:55-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/553a9abceb412",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1014528",
        "comics": {
          "available": 34,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014528/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/41350",
              "name": "Battle Scars (2011) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/75466",
              "name": "Marvel Rising (2019) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/75467",
              "name": "Marvel Rising (2019) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66916",
              "name": "Marvel Rising (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/73706",
              "name": "Marvel Rising (2018) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21211",
              "name": "Mighty Avengers (2007) #13"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21969",
              "name": "Mighty Avengers (2007) #18"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46444",
              "name": "Secret Avengers (2013) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46446",
              "name": "Secret Avengers (2013) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46448",
              "name": "Secret Avengers (2013) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46451",
              "name": "Secret Avengers (2013) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46453",
              "name": "Secret Avengers (2013) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62838",
              "name": "Secret Warriors  (2017) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23812",
              "name": "Secret Warriors (2009) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62839",
              "name": "Secret Warriors  (2017) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24002",
              "name": "Secret Warriors (2009) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/63200",
              "name": "Secret Warriors  (2017) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24208",
              "name": "Secret Warriors (2009) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/63759",
              "name": "Secret Warriors  (2017) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26287",
              "name": "Secret Warriors (2009) #5"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 10,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014528/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15370",
              "name": "Battle Scars (2011 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26568",
              "name": "Marvel Rising (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/25804",
              "name": "Marvel Rising (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27131",
              "name": "Marvel Rising (2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1866",
              "name": "Mighty Avengers (2007 - 2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17547",
              "name": "Secret Avengers (2013 - 2014)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6796",
              "name": "Secret Warriors (2009 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23047",
              "name": "Secret Warriors  (2017 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23608",
              "name": "Secret Warriors Vol. 1: Secret Empire (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24024",
              "name": "Secret Warriors Vol. 2: If Trouble Must Come (2018)"
            }
          ],
          "returned": 10
        },
        "stories": {
          "available": 35,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014528/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/46856",
              "name": "Secret Invasion 2 of 8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/48338",
              "name": "Secret Invasion 7 of 8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/52837",
              "name": "Secret Warriors (2008) #2",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53238",
              "name": "Secret Warriors (2008) #3",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53647",
              "name": "Secret Warriors (2008) #4",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/57871",
              "name": "Secret Warriors (2008) #11",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/57877",
              "name": "Secret Warriors (2008) #5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/57879",
              "name": "Secret Warriors (2008) #6",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/57885",
              "name": "Secret Warriors (2008) #9",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/69191",
              "name": "Secret Warriors (2008) #22",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/73526",
              "name": "Secret Warriors (2008) #15",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/93570",
              "name": "Battle Scars (2011) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/104474",
              "name": "cover from Secret Avengers (2013) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/104478",
              "name": "cover from Secret Avengers (2013) #4",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/104482",
              "name": "cover from Secret Avengers (2013) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/104488",
              "name": "cover from Secret Avengers (2013) #7",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/104492",
              "name": "cover from Secret Avengers (2013) #9",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131881",
              "name": "cover from Marvel's Agents of S.H.I.E.L.D.: Season Four Declassified (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/137238",
              "name": "cover from Secret Warriors (2017) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/138083",
              "name": "cover from Secret Warriors  (2017) #1",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1014528/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
              "name": "Secret Empire"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
              "name": "Shattered Heroes"
            }
          ],
          "returned": 4
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1014528/quake_daisy_johnson?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Johnson,_Daisy?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1014528/quake_daisy_johnson?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1017840,
        "name": "Okoye",
        "description": "",
        "modified": "2017-08-24T16:49:45-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017840",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017840/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017840/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017840/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017840/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/characters/3475/okoye?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Dora_Milaje?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1017840/okoye?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1013483,
        "name": "Nakia (Nakia)",
        "description": "",
        "modified": "2017-08-24T16:48:01-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1013483",
        "comics": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1013483/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67312",
              "name": "Avengers: Wakanda Forever (2018) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67593",
              "name": "X-Men: Wakanda Forever (2018) #1"
            }
          ],
          "returned": 2
        },
        "series": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1013483/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24325",
              "name": "Avengers: Wakanda Forever (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24375",
              "name": "X-Men: Wakanda Forever (2018)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1013483/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/145810",
              "name": "cover from Avengers: Wakanda Forever (2018) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/146372",
              "name": "cover from X-Men: Wakanda Forever (2018) #1",
              "type": "cover"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1013483/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1013483/nakia_nakia?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Malice_(Nakia)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1013483/nakia_nakia?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1017839,
        "name": "Phil Coulson (Phil Coulson)",
        "description": "",
        "modified": "2017-08-24T12:56:20-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017839",
        "comics": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017839/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62351",
              "name": "Guidebook to The Marvel Cinematic Universe - Marvel’s Agents of S.H.I.E.L.D. Season Four (2018) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/46176",
              "name": "Indestructible Hulk (2012) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35222",
              "name": "Iron Man 2- Phil Coulson: Agent of S.H.I.E.L.D. (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/51113",
              "name": "S.H.I.E.L.D. (2014) #1"
            }
          ],
          "returned": 4
        },
        "series": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017839/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22899",
              "name": "Guidebook to The Marvel Cinematic Universe - Marvel’s Agents of S.H.I.E.L.D. Season Four (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16583",
              "name": "Indestructible Hulk (2012 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/12449",
              "name": "Iron Man 2- Phil Coulson: Agent of S.H.I.E.L.D. (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/19639",
              "name": "S.H.I.E.L.D. (2014 - Present)"
            }
          ],
          "returned": 4
        },
        "stories": {
          "available": 7,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017839/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/77734",
              "name": " Iron Man 2- Phil Coulson: Agent of S.H.I.E.L.D. (2010) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/103912",
              "name": "Indestructible Hulk (2012) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/103913",
              "name": "story from Indestructible Hulk (2012) #8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/117569",
              "name": "S.H.I.E.L.D. (2014) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/117570",
              "name": "S.H.I.E.L.D. (2014) #1",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131881",
              "name": "cover from Marvel's Agents of S.H.I.E.L.D.: Season Four Declassified (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/135741",
              "name": "Guidebook to The Marvel Cinematic Universe - Marvel’s Agents of S.H.I.E.L.D. Season Four #1",
              "type": "cover"
            }
          ],
          "returned": 7
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017839/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1017839/phil_coulson_phil_coulson?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1017839/phil_coulson_phil_coulson?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009170,
        "name": "Baron Zemo (Heinrich Zemo)",
        "description": "",
        "modified": "2017-08-24T12:46:19-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/60/4c0041f84c9fe",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009170",
        "comics": {
          "available": 38,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009170/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7310",
              "name": "Avengers (1963) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7321",
              "name": "Avengers (1963) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6953",
              "name": "Avengers (1963) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6940",
              "name": "Avengers Annual (1967) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/70388",
              "name": "Avengers Undercover: The Complete Collection (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1428",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1524",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1525",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1668",
              "name": "Captain America (2004) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1870",
              "name": "Captain America (2004) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12848",
              "name": "Captain America (2002) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12818",
              "name": "Captain America (2002) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/2420",
              "name": "Captain America (2004) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/7481",
              "name": "Captain America (1968) #100"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/3916",
              "name": "Captain America: Winter Soldier Vol. 1 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5195",
              "name": "Captain America: Winter Soldier Vol. 2 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8557",
              "name": "Earth X (1999) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
              "name": "Earth X (New (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8689",
              "name": "Fantastic Four Annual (1963) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/38521",
              "name": "Fear Itself: The Book of the Skull (2011) #1"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 24,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009170/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
              "name": "Avengers (1963 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
              "name": "Avengers Annual (1967 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/25717",
              "name": "Avengers Undercover: The Complete Collection (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/724",
              "name": "Avengers: Earth's Mightiest Heroes (2004 - 2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
              "name": "Captain America (1968 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
              "name": "Captain America (2004 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/485",
              "name": "Captain America (2002 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1612",
              "name": "Captain America: Winter Soldier Vol. 1 (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1613",
              "name": "Captain America: Winter Soldier Vol. 2 (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
              "name": "Earth X (1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
              "name": "Earth X (New (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2012",
              "name": "Fantastic Four Annual (1963 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13822",
              "name": "Fear Itself: The Book of the Skull (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1614",
              "name": "House of M: World of M (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1507",
              "name": "Marvel Masterworks: Captain America Vol. 2 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3298",
              "name": "Marvel Masterworks: Captain America Vol. 2 (0000 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1390",
              "name": "Marvel Masterworks: The Avengers Vol. (2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1494",
              "name": "Marvel Masterworks: The Invincible Iron Man Vol. (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23793",
              "name": "Marvel Universe Avengers: Ultron Revolution (2017 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2079",
              "name": "Tales of Suspense (1959 - 1968)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 40,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009170/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3027",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3028",
              "name": "3 of 8 - 8XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3031",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #5",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3032",
              "name": "5 of 8 - 8XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3033",
              "name": "Avengers: Earth's Mightiest Heroes (2004) #6",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/3034",
              "name": "6 of 8 - 8XLS",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4234",
              "name": "4 of 8 - Out of Time",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4237",
              "name": "Cover: Captain America (2004) #6 of 6 - Out of Time",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4238",
              "name": "6 of 6 - Out of Time",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/4246",
              "name": "House of M tie-in",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/11992",
              "name": "The Claws of the Panther",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/11996",
              "name": "The Man Who Lived Twice!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/14442",
              "name": "The Avengers Break Up!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15182",
              "name": "Masters of Evil!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15204",
              "name": "Their Darkest Hour!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15278",
              "name": "Cover #15278",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17441",
              "name": "Masters of Evil",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17454",
              "name": "Captain America (1968) #100",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/17455",
              "name": "This Monster Unmasked",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24932",
              "name": "Earth X Chapter Seven",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009170/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            }
          ],
          "returned": 1
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009170/baron_zemo_heinrich_zemo?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Baron_Zemo_(Heinrich_Zemo)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009170/baron_zemo_heinrich_zemo?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009399,
        "name": "Legion",
        "description": "",
        "modified": "2017-08-24T12:36:39-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/30/526547cc31b36",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009399",
        "comics": {
          "available": 87,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009399/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/12754",
              "name": "Alpha Flight (1983) #88"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/65913",
              "name": "Legion (2018) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66285",
              "name": "Legion (2018) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66544",
              "name": "Legion (2018) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66914",
              "name": "Legion (2018) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67352",
              "name": "Legion (2018) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66037",
              "name": "Legion: Son of X Vol. 1 - Prodigal (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66362",
              "name": "Legion: Son of X Vol. 2 - Invasive Exotics (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/68788",
              "name": "Legion: Son of X Vol. 4 - For We Are Many (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/68787",
              "name": "Legion: Trauma (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24262",
              "name": "New Mutants (2009) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27398",
              "name": "New Mutants (2009) #1 (BENJAMIN VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26051",
              "name": "New Mutants (2009) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28600",
              "name": "New Mutants (2009) #2 (2ND PRINTING VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26052",
              "name": "New Mutants (2009) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26053",
              "name": "New Mutants (2009) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26054",
              "name": "New Mutants (2009) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/26058",
              "name": "New Mutants (2009) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/40170",
              "name": "New Mutants (2009) #23 (2nd Printing Variant)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/36497",
              "name": "New Mutants (2009) #24"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 30,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009399/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23908",
              "name": "Legion (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23956",
              "name": "Legion: Son of X Vol. 1 - Prodigal (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24041",
              "name": "Legion: Son of X Vol. 2 - Invasive Exotics (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24966",
              "name": "Legion: Son of X Vol. 4 - For We Are Many (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24965",
              "name": "Legion: Trauma (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7455",
              "name": "New Mutants (2009 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
              "name": "New Mutants (1983 - 1991)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24008",
              "name": "New Mutants by Zeb Wells: The Complete Collection (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/4603",
              "name": "New Mutants Classic Vol. 3 (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13519",
              "name": "New Mutants Classic Vol. 6 (2010 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3694",
              "name": "Secret Wars II (1985)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
              "name": "Uncanny X-Men (1963 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26038",
              "name": "Uncanny X-Men (2018 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
              "name": "What If? (1989 - 1998)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
              "name": "X-Factor (1986 - 1998)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
              "name": "X-Factor Annual (1986 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
              "name": "X-Force (1991 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
              "name": "X-Men (1991 - 2001)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2100",
              "name": "X-Men Annual (1970 - 1994)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 98,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009399/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19864",
              "name": "Kings of Pain Part 3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/19865",
              "name": "Kings of Pain Part 3: Queens of Sacrifice",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/21350",
              "name": "Building Blocks Part Two: Trust",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/21421",
              "name": "David Charles Haller",
              "type": "pin-up"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/21465",
              "name": "NEW MUTANTS (1983) #44",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/21466",
              "name": "Runaway!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/22106",
              "name": "Promised Vengeance",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/22107",
              "name": "Legion Quest",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/22108",
              "name": "The Waking",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/22112",
              "name": "Creatures On the Loose",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/22327",
              "name": "Clash Reunion",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24493",
              "name": "Endings",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28017",
              "name": "To Save The Dream--A New Legend Is Born!",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28018",
              "name": "All-New, All-Different--Here We Go Again",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28020",
              "name": "Crash and Burn",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28024",
              "name": "I Am Lady Mandarin",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28026",
              "name": "Broken Chains",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28028",
              "name": "Dream a Little Dream",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28066",
              "name": "The Battle of Muir Isle",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28070",
              "name": "One Step Back--Two Steps Forward",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 5,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009399/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
              "name": "Age of Apocalypse"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
              "name": "Age of X"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
              "name": "Kings of Pain"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
              "name": "Secret Wars II"
            }
          ],
          "returned": 5
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009399/legion?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Legion_(David_Haller)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009399/legion?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009515,
        "name": "Punisher",
        "description": "",
        "modified": "2017-08-24T11:20:12-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/90/5261675f6b22f",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009515",
        "comics": {
          "available": 642,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009515/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/41112",
              "name": "5 Ronin (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/35220",
              "name": "5 Ronin (2010) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/57933",
              "name": "A Year of Marvels: November Infinite Comic (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/58634",
              "name": "A Year of Marvels: The Incredible (2016) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17709",
              "name": "Agent X (2002) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6522",
              "name": "The Amazing Spider-Man (1963) #135"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6551",
              "name": "The Amazing Spider-Man (1963) #161"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6552",
              "name": "The Amazing Spider-Man (1963) #162"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6565",
              "name": "The Amazing Spider-Man (1963) #174"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6566",
              "name": "The Amazing Spider-Man (1963) #175"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6596",
              "name": "The Amazing Spider-Man (1963) #201"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6597",
              "name": "The Amazing Spider-Man (1963) #202"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6687",
              "name": "The Amazing Spider-Man (1963) #284"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6688",
              "name": "The Amazing Spider-Man (1963) #285"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6739",
              "name": "The Amazing Spider-Man (1963) #330"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6740",
              "name": "The Amazing Spider-Man (1963) #331"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6764",
              "name": "The Amazing Spider-Man (1963) #353"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6765",
              "name": "The Amazing Spider-Man (1963) #354"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6766",
              "name": "The Amazing Spider-Man (1963) #355"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/6767",
              "name": "The Amazing Spider-Man (1963) #356"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 180,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009515/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/12429",
              "name": "5 Ronin (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15276",
              "name": "5 Ronin (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21117",
              "name": "A Year of Marvels: November Infinite Comic (2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21404",
              "name": "A Year of Marvels: The Incredible (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/459",
              "name": "Agent X (2002 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
              "name": "Amazing Spider-Man (1999 - 2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
              "name": "Amazing Spider-Man Annual (1964 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
              "name": "Astonishing Tales (2009)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
              "name": "Avengers Assemble Vol. 4 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14246",
              "name": "Avenging Spider-Man (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/771",
              "name": "Bullseye: Greatest Hits (2004 - 2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1285",
              "name": "Bullseye: Greatest Hits (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20944",
              "name": "Cage (1992 - 1993)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
              "name": "Captain America (1968 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/6258",
              "name": "Captain Marvel (2002 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14984",
              "name": "Carnage, U.S.A. (2011 - 2012)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1067",
              "name": "Civil War (2006 - 2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21692",
              "name": "Civil War II: Choosing Sides (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21695",
              "name": "Civil War II: Kingpin (2016 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22990",
              "name": "Code of Honor (1997)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 831,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009515/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/976",
              "name": "Interior #976",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1199",
              "name": "Amazing Spider-Man (1999) #537",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1411",
              "name": "Interior #1411",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1626",
              "name": "Interior #1626",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1716",
              "name": "Interior #1716",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1841",
              "name": "Interior #1841",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1969",
              "name": "Interior #1969",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2107",
              "name": "Interior #2107",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2252",
              "name": "Interior #2252",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2545",
              "name": "1 of 6 - Mother Russia",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2547",
              "name": "2 of 6 - Mother Russia",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2554",
              "name": "Interior #2554",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2556",
              "name": "Interior #2556",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2558",
              "name": "Interior #2558",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2560",
              "name": "Interior #2560",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2562",
              "name": "Interior #2562",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2564",
              "name": "Interior #2564",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2566",
              "name": "Interior #2566",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2568",
              "name": "\"KITCHEN IRISH\" PART 6 (OF 6) Everyone gets just what they deserve. The bloodcurdling, bloodthirsty, bloody ending to Kitchen Ir",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/2570",
              "name": "3 of 6 - Mother Russia",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009515/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
              "name": "Onslaught"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/59",
              "name": "Shadowland"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/280",
              "name": "X-Tinction Agenda"
            }
          ],
          "returned": 8
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009515/punisher?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Punisher_(Frank_Castle)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009515/punisher?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      },
      {
        "id": 1009666,
        "name": "Thunderbird (John Proudstar)",
        "description": "An exceptionally strong and vigorous athlete in his youth, John Proudstar&rsquo;s mutant abilities first manifested when he wrestled a charging bison to save a young girl.",
        "modified": "2017-08-21T16:59:58-0400",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/4c003aa43b1ec",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009666",
        "comics": {
          "available": 32,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009666/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5844",
              "name": "Avengers Assemble Vol. 4 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/37881",
              "name": "Chaos War: X-Men (2010) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/20585",
              "name": "Classic X-Men (1986) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8519",
              "name": "Deadpool (1997) #61"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8556",
              "name": "Earth X (1999) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8557",
              "name": "Earth X (1999) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
              "name": "Earth X (New (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16315",
              "name": "Exiles (2001) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16326",
              "name": "Exiles (2001) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16327",
              "name": "Exiles (2001) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16250",
              "name": "Exiles (2001) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16251",
              "name": "Exiles (2001) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/16256",
              "name": "Exiles (2001) #16"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1094",
              "name": "Exiles Vol. 3: Out of Time (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1056",
              "name": "Exiles Vol. II: A World Apart (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/1587",
              "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/10286",
              "name": "Maximum Security (2000) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/5451",
              "name": "New X-Men (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/14951",
              "name": "New X-Men (2001) #132"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/994",
              "name": "New X-Men Vol. III: New Worlds (Trade Paperback)"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 22,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009666/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
              "name": "Avengers Assemble Vol. 4 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13588",
              "name": "Chaos War: X-Men (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3751",
              "name": "Classic X-Men (1986 - 1990)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
              "name": "Deadpool (1997 - 2002)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
              "name": "Earth X (1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
              "name": "Earth X (New (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/479",
              "name": "Exiles (2001 - 2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/154",
              "name": "Exiles Vol. 3: Out of Time (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/116",
              "name": "Exiles Vol. II: A World Apart (1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1440",
              "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (2005)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2049",
              "name": "Maximum Security (2000 - 2001)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2281",
              "name": "New X-Men (2001 - 2004)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1807",
              "name": "New X-Men (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/56",
              "name": "New X-Men Vol. III: New Worlds (1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2431",
              "name": "Paradise X Vol. 1 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24360",
              "name": "True Believers: Exiles (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
              "name": "Uncanny X-Men (1963 - 2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1723",
              "name": "Uncanny X-Men Omnibus Vol. 1 (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
              "name": "Wolverine (1988 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
              "name": "X-Force (1991 - 2004)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 28,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009666/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15691",
              "name": "The Doomsmith Scenario!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15692",
              "name": "Uncanny X-Men (1963) #95",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15693",
              "name": "Warhunt",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/15695",
              "name": "Uncanny X-Men (1963) #96",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24929",
              "name": "Earth X Chapter Six",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24932",
              "name": "Earth X Chapter Seven",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26042",
              "name": "Paradise X Issue X",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26239",
              "name": "Whatever the Cost!",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28284",
              "name": "History Repeats",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28738",
              "name": "The Logan Files Epilogue",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/29322",
              "name": "Back From the Dead?!",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/29327",
              "name": "Eve of Destruction",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/30438",
              "name": "Ambient Magnetic Fields",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34029",
              "name": "A World Apart Part Three Of Three",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34031",
              "name": "Play Date",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34039",
              "name": "Nocturne And Evensong",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34066",
              "name": "A Chance To Dream . . .",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34069",
              "name": "Exiles",
              "type": "letters"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34070",
              "name": "A World Apart Part 1 of 3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/34071",
              "name": "A World Apart Part One Of Three",
              "type": "interiorStory"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009666/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            }
          ],
          "returned": 2
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009666/thunderbird_john_proudstar?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Thunderbird_(John_Proudstar)?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009666/thunderbird_john_proudstar?utm_campaign=apiRef&utm_source=bc6cab3e320a64226fbe7d20ee0af241"
          }
        ]
      }
    ]
  }
  ngOnInit() {
  }

}
