const Api = (_ => {
    const APIKey = 'fvotlnsnto1d2h3suetbt9j6ecfwi2wifedliqmnkctc985s0';
    const endPoint = 'https://api.wordnik.com/';
    const getInfo = async _ => {
        const fetchData = await fetch(`${endPoint}v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=adjective%2C%20verb%2C%20adverb%2C%20interjection%2C%20pronoun%2C%20preposition%2C%20abbreviation%2C%20affix%2C%20article%2C%20auxiliary-verb%2C%20conjunction%2C%20definite-article%2C%20family-name%2C%20given-name%2C%20idiom%2C%20imperative%2C%20noun-plural%2C%20noun-posessive%2C%20past-participle%2C%20phrasal-prefix%2C%20proper-noun%2C%20proper-noun-plural%2C%20proper-noun-posessive%2C%20suffix%2C%20verb-intransitive%2C%20verb-transitive&minCorpusCount=2000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=3&maxLength=9&api_key=${APIKey}`);
        const parsedData = await fetchData.json();
        return parsedData.word.toLowerCase();
    }


        


    return {
        getInfo
    }

})();

export default Api;