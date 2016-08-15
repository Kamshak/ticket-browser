import { TicketsCollection } from '../../../both/collections/TicketsCollection';
import { TicketDataObject } from '../../../both/models/TicketDataObject';
import { check } from 'meteor/check'

export class Main {
  constructor() {
  }

  start(): void {
    Meteor.publish("Tickets", (count: number, searchText: string, scripts: number[]) => {
			console.log("Meteor: ", searchText, count, scripts);
			check(searchText, String);
			check(count, Number);
			check(scripts, [Number]);
      return TicketsCollection.find({
				"$text": { "$search": searchText },
				"scriptId": { "$in": scripts }
			}, {
					fields: {
						score: { $meta: "textScore" }
					},
					limit: count,
					sort: {
						score: { $meta: "textScore" }
					}
				}
			);
    });
  }
}
