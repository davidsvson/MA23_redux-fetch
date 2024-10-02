import { useDispatch, useSelector } from "react-redux";
import { failure, isFetching, STATUS, success } from "../features/randomFact";

const RandomFact = () => {

    const factObject = useSelector(state => state.randomFact);
    const dispatch = useDispatch();

    const fetchFact = async () => {
        dispatch(isFetching());

        const URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

        try {
            let response = await fetch(URL);
            let json = await response.json();
            let fact = json.text;
            dispatch(success(fact))
        } catch {
            dispatch(failure());
        }
    }

    let content = null;
    switch(factObject.status) {
        case STATUS.NORMAL :
            content = 'Redo för fakta?';
            break;
        case STATUS.FETCHING :
            content = 'Väntar på fakta';
            break;
        case STATUS.SUCCESS : 
            content = factObject.fact;
            break;
        default : 
            content = 'Kunde inte hämta fakta';
    }

    return (
        <div>
            <button onClick={() => fetchFact()}>Get Fact!</button>
            <p>
                {content}
            </p>
        </div>
    )

}

export default RandomFact;