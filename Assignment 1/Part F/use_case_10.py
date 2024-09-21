import tkinter as tk

def on_submit():
    print(f"Name: {name_entry.get()}")
    print(f"Email: {email_entry.get()}")

app = tk.Tk()
app.title('Simple Form')

tk.Label(app, text='Name').grid(row=0)
tk.Label(app, text='Email').grid(row=1)

name_entry = tk.Entry(app)
email_entry = tk.Entry(app)

name_entry.grid(row=0, column=1)
email_entry.grid(row=1, column=1)

tk.Button(app, text='Submit', command=on_submit).grid(row=2, column=1)

app.mainloop()