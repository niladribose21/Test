angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'name.first'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchName   = '';     // set the default search/filter term
   $scope.alphabets = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
    //used with ng-click
	 $scope.select = function ($index) {
        $scope.searchName = $scope.alphabets[$index];
		console.log($scope.selected);
   }
   $scope.startsWithSelected = function (value, index) {
        if ($scope.selected) {
            return value[0].toLowerCase() === $scope.selected.toLowerCase();
        } else {
            return true;
        }

    }

	
  
  // create the list of sushi rolls 
  $scope.details = [
   {
    "_id": "579cebd2185de0ea1bd1b902",
    "index": 0,
    "guid": "81bf4e05-d914-4b40-b1a4-14b56a2cee07",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 40,
    "name": {
      "first": "Jeri",
      "last": "Tyson"
    },
    "email": "jeri.tyson@undefined.me",
    "phone": "+91 (853) 451-3675"
  },
  {
    "_id": "579cebd2578e662485a8969c",
    "index": 1,
    "guid": "7071544e-9356-4465-b07e-8998bf949646",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 23,
    "name": {
      "first": "Figueroa",
      "last": "Stanley"
    },
    "email": "figueroa.stanley@undefined.info",
    "phone": "+91 (840) 558-2612"
  },
  {
    "_id": "579cebd212b6e70105d494f1",
    "index": 2,
    "guid": "4dc81697-5d4e-457f-b712-596a41df550f",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 39,
    "name": {
      "first": "Ivy",
      "last": "Smith"
    },
    "email": "ivy.smith@undefined.io",
    "phone": "+91 (969) 568-2563"
  },
  {
    "_id": "579cebd2bf443077a78e0a7c",
    "index": 3,
    "guid": "01edf73b-84b8-4cc9-9478-da7850949990",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 20,
    "name": {
      "first": "Haley",
      "last": "Rivas"
    },
    "email": "haley.rivas@undefined.biz",
    "phone": "+91 (830) 515-2439"
  },
  {
    "_id": "579cebd20b492a38f218c5a5",
    "index": 4,
    "guid": "aeadb0b5-7559-49b1-9b23-ae3788293df2",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 25,
    "name": {
      "first": "Catalina",
      "last": "Pollard"
    },
    "email": "catalina.pollard@undefined.ca",
    "phone": "+91 (850) 543-2380"
  },
  {
    "_id": "579cebd27205a38059d37634",
    "index": 5,
    "guid": "c52ffd70-8a9c-4451-80e5-f945d1bfa279",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 34,
    "name": {
      "first": "Sosa",
      "last": "Brock"
    },
    "email": "sosa.brock@undefined.co.uk",
    "phone": "+91 (985) 555-2530"
  },
  {
    "_id": "579cebd20c085df5960ab535",
    "index": 6,
    "guid": "04badb04-4b02-4803-86c4-3bf9215663f1",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 25,
    "name": {
      "first": "Winifred",
      "last": "Michael"
    },
    "email": "winifred.michael@undefined.com",
    "phone": "+91 (906) 522-2574"
  },
  {
    "_id": "579cebd2b75c0c8f4fe8eead",
    "index": 7,
    "guid": "c42877d5-5e9b-47fe-9359-ae7b8956737c",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 32,
    "name": {
      "first": "Workman",
      "last": "Rowland"
    },
    "email": "workman.rowland@undefined.biz",
    "phone": "+91 (869) 450-2721"
  },
  {
    "_id": "579cebd288b64ba101201ebb",
    "index": 8,
    "guid": "d9725893-675d-4695-87ee-898a446be29b",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 22,
    "name": {
      "first": "Melanie",
      "last": "Rice"
    },
    "email": "melanie.rice@undefined.us",
    "phone": "+91 (831) 569-3759"
  },
  {
    "_id": "579cebd2af037127e9f894ce",
    "index": 9,
    "guid": "8b949626-5d81-4245-b28b-e9fbba7f3785",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 29,
    "name": {
      "first": "Wilkinson",
      "last": "Calderon"
    },
    "email": "wilkinson.calderon@undefined.name",
    "phone": "+91 (850) 446-2309"
  },
  {
    "_id": "579cebd2a9ec0920e7d0248f",
    "index": 10,
    "guid": "da476456-a710-446d-9024-2b36520f54f6",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 23,
    "name": {
      "first": "Bullock",
      "last": "Gardner"
    },
    "email": "bullock.gardner@undefined.tv",
    "phone": "+91 (920) 455-2772"
  },
  {
    "_id": "579cebd2650cbdc0c7ab5244",
    "index": 11,
    "guid": "fd3eeb23-d39d-474c-8a41-9c435bf272e7",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 20,
    "name": {
      "first": "Cristina",
      "last": "Abbott"
    },
    "email": "cristina.abbott@undefined.org",
    "phone": "+91 (911) 514-3918"
  },
  {
    "_id": "579cebd2f483e1d328c9f61b",
    "index": 12,
    "guid": "048c4ff8-4d7d-494b-9dbb-72720a78bee6",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 32,
    "name": {
      "first": "Vonda",
      "last": "Daugherty"
    },
    "email": "vonda.daugherty@undefined.me",
    "phone": "+91 (978) 416-3721"
  },
  {
    "_id": "579cebd2f047b99b83abaf75",
    "index": 13,
    "guid": "24cdefa6-97c8-4897-95c5-da65223b2949",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 21,
    "name": {
      "first": "Frost",
      "last": "Thompson"
    },
    "email": "frost.thompson@undefined.info",
    "phone": "+91 (977) 444-3326"
  },
  {
    "_id": "579cebd2b8428696ec925cfc",
    "index": 14,
    "guid": "9055804d-9e7c-4501-b970-254353095962",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 27,
    "name": {
      "first": "Hardin",
      "last": "Mullen"
    },
    "email": "hardin.mullen@undefined.io",
    "phone": "+91 (903) 528-2363"
  },
  {
    "_id": "579cebd206eedbfc9aa2255f",
    "index": 15,
    "guid": "fe6178d9-8d0c-4f91-acf9-5042dfd5f7e3",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 28,
    "name": {
      "first": "Carver",
      "last": "Rogers"
    },
    "email": "carver.rogers@undefined.biz",
    "phone": "+91 (950) 511-2709"
  },
  {
    "_id": "579cebd2a0ebcde3f746eaea",
    "index": 16,
    "guid": "f9a828b2-4b9f-41f9-866b-6fd1760668c9",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 39,
    "name": {
      "first": "Alissa",
      "last": "Mueller"
    },
    "email": "alissa.mueller@undefined.ca",
    "phone": "+91 (866) 478-3931"
  },
  {
    "_id": "579cebd28ff6408c14bb4abf",
    "index": 17,
    "guid": "eb66b795-bdc4-47c8-813a-786962d45956",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 36,
    "name": {
      "first": "Yolanda",
      "last": "Horton"
    },
    "email": "yolanda.horton@undefined.co.uk",
    "phone": "+91 (899) 417-3020"
  },
  {
    "_id": "579cebd2ecef6b2a55a82a66",
    "index": 18,
    "guid": "51305c4a-6023-4d24-a112-3506fc7db71b",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 31,
    "name": {
      "first": "Anna",
      "last": "Sampson"
    },
    "email": "anna.sampson@undefined.com",
    "phone": "+91 (908) 566-2053"
  },
  {
    "_id": "579cebd2c81cda4e01c0124e",
    "index": 19,
    "guid": "64056c1a-6c02-4a23-8b39-75160e4fcf30",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 24,
    "name": {
      "first": "Francisca",
      "last": "Estes"
    },
    "email": "francisca.estes@undefined.biz",
    "phone": "+91 (960) 466-3494"
  },
  {
    "_id": "579cebd2e78346a628b16f37",
    "index": 20,
    "guid": "7b24b566-115e-4b2b-a205-e4e167f71623",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 32,
    "name": {
      "first": "Hendrix",
      "last": "Cruz"
    },
    "email": "hendrix.cruz@undefined.us",
    "phone": "+91 (923) 435-2720"
  },
  {
    "_id": "579cebd27436b2bcfef11ee2",
    "index": 21,
    "guid": "c90d5a12-f602-402b-8b85-6143d7d3e7fc",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 39,
    "name": {
      "first": "Tabatha",
      "last": "Callahan"
    },
    "email": "tabatha.callahan@undefined.name",
    "phone": "+91 (848) 587-2506"
  },
  {
    "_id": "579cebd2cf27766dda0b4cf4",
    "index": 22,
    "guid": "650e4db6-beae-4dc7-b224-a70bcbe00b5b",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 23,
    "name": {
      "first": "Iva",
      "last": "Hopkins"
    },
    "email": "iva.hopkins@undefined.tv",
    "phone": "+91 (983) 567-3400"
  },
  {
    "_id": "579cebd2c767d0f09539ec55",
    "index": 23,
    "guid": "36f1360c-f099-470c-9ec7-1c98dc8b0a20",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 30,
    "name": {
      "first": "Mccall",
      "last": "Kirkland"
    },
    "email": "mccall.kirkland@undefined.org",
    "phone": "+91 (850) 496-2329"
  },
  {
    "_id": "579cebd2bcc40178bdb5416b",
    "index": 24,
    "guid": "2ee78be7-9167-48a6-9288-dd6f23904e8a",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 22,
    "name": {
      "first": "Monica",
      "last": "Vasquez"
    },
    "email": "monica.vasquez@undefined.me",
    "phone": "+91 (839) 597-2312"
  },
  {
    "_id": "579cebd2c7aa5a210628eb2e",
    "index": 25,
    "guid": "0e6fa72e-a82f-479a-b924-d9d95e90c9a8",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 35,
    "name": {
      "first": "Violet",
      "last": "Whitley"
    },
    "email": "violet.whitley@undefined.info",
    "phone": "+91 (961) 469-3192"
  },
  {
    "_id": "579cebd269a0ac0129835371",
    "index": 26,
    "guid": "3eab9f97-26c0-4fc6-b326-539c8671005d",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 24,
    "name": {
      "first": "Goodman",
      "last": "Hogan"
    },
    "email": "goodman.hogan@undefined.io",
    "phone": "+91 (965) 548-3916"
  },
  {
    "_id": "579cebd27828afe3e92e457a",
    "index": 27,
    "guid": "b950d9d6-0fb7-401b-a53d-f1d83e4d724e",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 26,
    "name": {
      "first": "Adrienne",
      "last": "Spence"
    },
    "email": "adrienne.spence@undefined.biz",
    "phone": "+91 (811) 519-2176"
  },
  {
    "_id": "579cebd2502e31868955a5e5",
    "index": 28,
    "guid": "7ed56406-3aa0-4913-8e2a-2c1cf2b0c2e7",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 29,
    "name": {
      "first": "Leach",
      "last": "Dejesus"
    },
    "email": "leach.dejesus@undefined.ca",
    "phone": "+91 (845) 594-3047"
  },
  {
    "_id": "579cebd26bd44937f6d80920",
    "index": 29,
    "guid": "4a00f1d1-ef5c-4d94-9674-01d6d39282c9",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 29,
    "name": {
      "first": "Miles",
      "last": "Sharpe"
    },
    "email": "miles.sharpe@undefined.co.uk",
    "phone": "+91 (877) 582-2796"
  },
  {
    "_id": "579cebd2ba58ec0140b3a59c",
    "index": 30,
    "guid": "e24ec97c-2d72-451f-9acc-1024bb740ffe",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 27,
    "name": {
      "first": "Pratt",
      "last": "Mcdonald"
    },
    "email": "pratt.mcdonald@undefined.com",
    "phone": "+91 (961) 425-3597"
  },
  {
    "_id": "579cebd2a54055b41b7cf3be",
    "index": 31,
    "guid": "c59e24a1-77b7-424d-abbb-96951833d547",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 27,
    "name": {
      "first": "Buchanan",
      "last": "Anderson"
    },
    "email": "buchanan.anderson@undefined.biz",
    "phone": "+91 (921) 461-3252"
  },
  {
    "_id": "579cebd28d37c4685a733168",
    "index": 32,
    "guid": "e8e52d48-418c-404a-af32-e4c15102aa1b",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 32,
    "name": {
      "first": "Eileen",
      "last": "Juarez"
    },
    "email": "eileen.juarez@undefined.us",
    "phone": "+91 (935) 525-3290"
  },
  {
    "_id": "579cebd23c6a80dfcb3110f4",
    "index": 33,
    "guid": "64ab279f-bf56-46de-9799-3fc2b52931b8",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 24,
    "name": {
      "first": "Singleton",
      "last": "Schwartz"
    },
    "email": "singleton.schwartz@undefined.name",
    "phone": "+91 (830) 465-3830"
  },
  {
    "_id": "579cebd21e44ee513f56ea8c",
    "index": 34,
    "guid": "b80fdfe5-dc4c-41c7-8fef-ae9819d98f99",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 26,
    "name": {
      "first": "Dunn",
      "last": "Hill"
    },
    "email": "dunn.hill@undefined.tv",
    "phone": "+91 (888) 523-3240"
  },
  {
    "_id": "579cebd210744154183a400c",
    "index": 35,
    "guid": "203b490d-1d3b-48da-b4d4-95951540db15",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 31,
    "name": {
      "first": "Mcdonald",
      "last": "Jennings"
    },
    "email": "mcdonald.jennings@undefined.org",
    "phone": "+91 (877) 484-3088"
  },
  {
    "_id": "579cebd21a3445f673663438",
    "index": 36,
    "guid": "c2795193-ff89-421c-aa7b-c298c7e604a7",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 25,
    "name": {
      "first": "Ida",
      "last": "Everett"
    },
    "email": "ida.everett@undefined.me",
    "phone": "+91 (995) 569-2603"
  },
  {
    "_id": "579cebd202c20c632534d2e1",
    "index": 37,
    "guid": "c5efa6c3-7f1e-4354-9e78-1117236443d9",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 31,
    "name": {
      "first": "Natasha",
      "last": "Blair"
    },
    "email": "natasha.blair@undefined.info",
    "phone": "+91 (828) 470-2769"
  },
  {
    "_id": "579cebd2ff07af27ef7d93dc",
    "index": 38,
    "guid": "baf1534f-68d7-41d1-97b6-e3fe0d09552c",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 20,
    "name": {
      "first": "Ruby",
      "last": "Roman"
    },
    "email": "ruby.roman@undefined.io",
    "phone": "+91 (915) 592-2002"
  },
  {
    "_id": "579cebd2901c03ee12d61159",
    "index": 39,
    "guid": "e5889dff-4751-4ed0-906d-bdf854d2e68a",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 35,
    "name": {
      "first": "Noel",
      "last": "Cash"
    },
    "email": "noel.cash@undefined.biz",
    "phone": "+91 (973) 565-3197"
  },
  {
    "_id": "579cebd20614fae138cc0b27",
    "index": 40,
    "guid": "9b0bb86f-871a-46ea-b81c-bb9473503f28",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 28,
    "name": {
      "first": "Whitney",
      "last": "Oneal"
    },
    "email": "whitney.oneal@undefined.ca",
    "phone": "+91 (815) 542-3889"
  },
  {
    "_id": "579cebd2a684c83713f20d5b",
    "index": 41,
    "guid": "35d95d3a-eb23-42ca-a783-b7e5cce752e8",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 25,
    "name": {
      "first": "Elma",
      "last": "West"
    },
    "email": "elma.west@undefined.co.uk",
    "phone": "+91 (933) 599-2906"
  },
  {
    "_id": "579cebd2afc4adc0ee1aa656",
    "index": 42,
    "guid": "1dbb8371-d747-4088-bab1-5f6e60e38583",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 20,
    "name": {
      "first": "Lawson",
      "last": "Roth"
    },
    "email": "lawson.roth@undefined.com",
    "phone": "+91 (963) 427-3659"
  },
  {
    "_id": "579cebd2ef925e785c250fe0",
    "index": 43,
    "guid": "7c168f22-3b8e-4598-a788-355424e55e30",
    "picture": "placehold.it/100/9C27B0/000000",
    "age": 29,
    "name": {
      "first": "Connie",
      "last": "Ingram"
    },
    "email": "connie.ingram@undefined.biz",
    "phone": "+91 (949) 474-3238"
  }
  ];
  
});

