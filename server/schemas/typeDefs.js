const { gql } = require("apollo-server-express");

const typeDefs = gql`
	# User type represents a user in the system
	type User {
		_id: ID!
		name: String
		email: String
		password: String
		lectures: [Lecture]
	}


	# Lecture type represents a lecture with associated settings, conversation, and messages
	type Lecture {
		_id: ID!
		title: String!
		language: String
		professor: String
		conversation: [Message]
		userId: ID
	}

	type Message {
		_id: ID!
		text: String!
		sender: String
		timestamp: String
	}

	# Query type for retrieving data
	type Query {
		getUser(id: ID!): User
		getAllUsers: [User]
		getLecture(id: ID!): Lecture
		getUserLectures(userId: ID!): [Lecture]
		getAllLectures: [Lecture]
	}

	# Mutation type for performing actions like registration, login, creating lectures, and updating settings
	type Mutation {
		registerUser(
			username: String!
			email: String!
			password: String!
		): AuthPayload
		loginUser(email: String!, password: String!): AuthPayload
		deleteLecture(id: ID!): String
		createLecture(userId: ID!): Lecture
	}

	input MessageInput {
		text: String!
		sender: String
		timestamp: String
	}

	# AuthPayload type represents the response from registration and login mutations, including a token
	type AuthPayload {
		token: String!
	}

	# Input type for updating lecture settings
	input LectureSettingsInput {
		professor: String
		language: String
		# Add other settings fields as needed
	}
`;

module.exports = typeDefs;
