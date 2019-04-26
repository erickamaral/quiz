import { Serializable, Serialize, SerializeProperty } from 'ts-serializer';

@Serialize({})
export class Movie extends Serializable {

  @SerializeProperty()
  title: string;

  @SerializeProperty()
  director: string;

  @SerializeProperty()
  producer: string;
}
