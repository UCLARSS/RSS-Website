import urllib.request

def main():
	data = urllib.request.urlopen("https://calendar.google.com/calendar/ical/6vqj1dnvf1ohr2ntsek6av4lj8%40group.calendar.google.com/public/basic.ics") # it's a file like object and works just like a file
	for line in data: # files are iterable
		string=line.decode("utf-8") #convert bytes to string representation
		if "DTSTART" in string:
			print (string)
	


if __name__=="__main__":
	main()
