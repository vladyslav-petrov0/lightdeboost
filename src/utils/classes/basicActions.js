export class BasicActions {
  constructor(name) {
    this.name = name;

    this.request = () => {
      return { type: `${this.name}_REQUEST` };
    };

    this.error = (error) => {
      return {
        type: `${this.name}_FAILURE`,
        payload: error,
      };
    };

    this.loaded = (payload) => {
      return {
        type: `${this.name}_SUCCESS`,
        payload,
      };
    };
  }
}
