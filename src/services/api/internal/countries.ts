import { internalClient } from "@/services/libs/internalClient";
import { Country } from "@/types/models/country";
import { gql } from "@apollo/client";

const LIST_COUNTRIES = gql`
    query {
        countries {
            name
            code
            capital
            continent {
                name
            }
            emoji
        }
    }
`;

export const findAll = async (): Promise<Country[]> => {
    const { data } = await internalClient.query<{ countries: Country[] }>({
        query: LIST_COUNTRIES,
    });

    return data.countries;
};
