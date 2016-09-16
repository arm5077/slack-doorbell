exports.handler = function(event, context){
  var request = require('request');
  var quotes = [
    { 
      quote: "Good manners will open doors that the best education cannot.",
      author: "Clarence Thomas"
    },
    { 
      quote: "I think there are influences that you open the door to, and influences that come under the door.",
      author: "Harrison Birtwistle"
    },
    { 
      quote: "We must open the doors of opportunity. But we must also equip our people to walk through those doors.",
      author: "Lyndon B. Johnson"
    },
    { 
      quote: "I find that when you open the door toward openness and transparency, a lot of people will follow you through.",
      author: "Kirsten Gillibrand"
    },
    { 
      quote: "Not knowing when the dawn will come\nI open every door.",
      author: "Emily Dickinson"
    },
    { 
      quote: "In life sometimes, in the universe, you have to close some doors to have others open.",
      author: "Gene Ween"
    },
    { 
      quote: "Knowledge of what is does not open the door directly to what should be.",
      author: "Albert Einstein"
    },
    { 
      quote: "When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one which has opened for us.",
      author: "Alexander Graham Bell"
    },
  ]

  var this_quote = quotes[Math.floor(Math.random() * quotes.length)];

  request.post("https://hooks.slack.com/services/[INSERT THE REST OF YOUR WEBHOOK URL HERE]", 
    {
      form: {
        payload: '{"username": "doorbellbot", "icon_emoji": ":bellhop_bell:", "text": "<!group> Someone is at the door! Let \'em in.\n>\\"' + this_quote.quote + '\\" \n>- ' + this_quote.author + '"}'
      }
    },
    function (error, response, body) {
      if(error) throw error;
      console.log(response);
    }
  );
}
