
    /* tslint:disable */
    export default
    {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "adress": {
      "type": "string"
    },
    "teacher": {
      "$ref": "#/definitions/TeacherITF"
    }
  },
  "required": [
    "adress",
    "name",
    "teacher"
  ],
  "definitions": {
    "StudentITF": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "age": {
          "type": "number"
        },
        "sex": {
          "type": "number"
        },
        "friend": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "class": {
          "type": "string"
        }
      },
      "required": [
        "name"
      ]
    },
    "TeacherITF": {
      "type": "object",
      "properties": {
        "name": {
          "description": "Allows manipulation and formatting of text strings and determination and location of substrings within strings.",
          "type": "object",
          "additionalProperties": false,
          "patternProperties": {
            "^[0-9]+$": {
              "type": "string"
            }
          }
        },
        "age": {
          "type": "number"
        },
        "class": {
          "type": "string"
        },
        "students": {
          "$ref": "#/definitions/StudentITF"
        }
      },
      "required": [
        "class",
        "name",
        "students"
      ]
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}
    