import {TicketDataObject} from "../models/TicketDataObject";
import {Mongo} from "meteor/mongo";

export const TicketsCollection = new Mongo.Collection<TicketDataObject>('tickets');

if (Meteor.isServer) {
	TicketsCollection._ensureIndex("TextSearch", {"comments.text":"text"});
}
