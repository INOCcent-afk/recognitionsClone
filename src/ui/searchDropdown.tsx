import React from "react";

type Props = {
  data: {
    data: [];
  };
};

const SearchDropdown: React.FC<Props> = ({ data }: Props) => {
  return (
    <ul>
      {data.data.map(
        (user: {
          email: string;
          firstName: string;
          lastName: string;
          picture: string;
        }) => (
          <>
            <li>{user.email}</li>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <img src={user.picture} />
          </>
        )
      )}
    </ul>
  );
};

export default SearchDropdown;
