Franz Recipe for Dialpad
========================

This recipe allows you to integrate `Franz`_ with `Dialpad`_. It also works
with `Ferdi`_, the community-maintained Franz fork.

Installation
------------

#. Create a plugins folder on your machine, if it does not exist yet. Replace
   ``<APP>`` with either ``"Franz"`` or ``"Ferdi"``:

   - Linux: ``~/.config/<APP>/recipes/dev/``
   - Mac: ``~/Library/Application Support/<APP>/recipes/dev/``
   - Windows: ``%APPDATA%/<APP>/recipes/dev/``

   where ``~`` is your home directory, eg:

   - Linux: ``/home/kevin``
   - Mac: ``/Users/kevin``
   - Windows: ``C:/Users/kevin/AppData/Roaming``

#. Copy this repo into the above folder, named ``dialpad``:

   - if you have ``git``, run: ``git clone git@github.com:TheKevJames/franz-recipe-dialpad.git ~/.config/<APP>/recipes/dev/dialpad``
   - otherwise, grab the latest `zip file`_ and unzip it into the above
     folder, then rename it to ``dialpad``

#. Reload Franz/Ferdi

Updating
--------

If you used ``git`` in the installation step, simply navigate to that folder
and run ``git pull``.

If not, you'll need to repeat the installation procedure from scratch, deleting
the folder you created the previous time around.

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

.. _Dialpad: https://dialpad.com
.. _Ferdi: https://getferdi.com/
.. _Franz: https://meetfranz.com/
.. _Gruvbox: https://github.com/morhetz/gruvbox
.. _zip file: https://github.com/TheKevJames/franz-recipe-dialpad/archive/master.zip
