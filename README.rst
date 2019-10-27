Franz Recipe for Dialpad
========================

This recipe allows you to integrate Franz with `Dialpad`_.

Installation
------------

#. Create a Franz plugins folder on your machine, if it does not exist yet:

   - Linux: ``~/.config/Franz/recipes/dev/``
   - Mac: ``~/Library/Application Support/Franz/recipes/dev/``
   - Windows: ``%APPDATA%/Franz/recipes/dev/``

   where ``~`` is your home directory, eg:

   - Linux: ``/home/kevin``
   - Mac: ``/Users/kevin``
   - Windows: ``C:/Users/kevin/AppData/Roaming``

#. Copy this repo into the above folder, named ``dialpad``:

   - if you have ``git``, run: ``git clone git@github.com:TheKevJames/franz-recipe-dialpad.git ~/.config/Franz/recipes/dev/dialpad``
   - otherwise, grab the latest `zip file`_ and unzip it into the above folder, then rename it to ``dialpad``

#. Reload Franz

.. _Dialpad: https://dialpad.com
.. _Gruvbox: https://github.com/morhetz/gruvbox
.. _zip file: https://github.com/TheKevJames/franz-recipe-dialpad/archive/master.zip

Dark Mode
---------

The Dialpad app is unfortunately not compatible with apps like Franz which can
change the default colors -- if you use Franz' dark mode with Dialpad, you'll
end up with an unreadable mess.

To combat this, I've added a darkmode user-style sheet which makes use of the
`Gruvbox`_ dark template. I am not a good designer and building Franz recipe
stylesheets amounts to hunt-and-replace, so its likely that I've missed some
(many) pieces. Contributions are more than welcome! Note that you will need to
enable Dark Mode for your Dialpad service *in addition* to Franz itself for
this to get applied.

If you're not a fan of my horrid attempt at being a designer, I also have a
patch which will fix Dialpad's vanilla styles while Franz is in Dark Mode.
Simply over-write the ``darkmode.css`` file in your installed Dialpad recipe
directory with ``whitemode.css``, then toggle on Dialpad Dark Mode as above --
if all goes well, you should see absolutely no change! If you do this, you can
feel free to toggle Franz to Dark Mode without rendering Dialpad unreadable.
